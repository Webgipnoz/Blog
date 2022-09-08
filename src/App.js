import React, { useEffect, useState } from "react";
import { usePosts } from "./hooks/usePosts";
import { useFetching } from "./hooks/useFetching";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import PostService from "./API/PostServise";
import './styles/App.css'
import Loader from "./components/UI/Loader/Loader";
import { getPageCount } from "./utils/pages";
import { getPagesArray } from "./utils/pages";

function App() {
    const[posts, setPosts] = useState([]);
    const[filter, setFilter] = useState({sort:'', query:''});   
    const[modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const[totalPages, setTotalPages] = useState(0);
    const[limit, setLimit] = useState(10);
    const[page,setPage] = useState(1);
    let pagesArray = getPagesArray(totalPages)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async() =>{
        const response = await PostService.getAll(limit,page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() =>{
        fetchPosts();    
    }, [])

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className='App'>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin:'15px 0'}}></hr>
            <PostFilter 
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>We have an Error ${postError}</h1>
            }
            {isPostsLoading
                ?   <div style={{display: 'flex', justifyContent: "center", marginTop: '50px'}}>
                        <Loader></Loader>
                    </div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts}></PostList>
            }
            <div className="page__wrapper">
                {pagesArray.map(p =>
                    <span 
                        onClick={() => setPage(p)}
                        key={p} 
                        className={page === p ? 'page page__current' : 'page'}
                    >
                        {p}
                    </span>    
                )}
            </div>
        </div>
  );
}
export default App;