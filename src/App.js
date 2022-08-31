import React, { useEffect, useState } from "react";
import { usePosts } from "./hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import PostService from "./API/PostServise";
import './styles/App.css'
import Loader from "./components/UI/Loader/Loader";

function App() {
    const[posts, setPosts] = useState([]);
    const[filter, setFilter] = useState({sort:'', query:''});   
    const[modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [isPostsLoading, setIsPostsLoading] = useState(false);

    useEffect(() =>{
        fetchPosts()     
    }, [])

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts(){
        setIsPostsLoading(true)
        setTimeout(async () =>{
            const posts = await PostService.getAll();
            setPosts(posts)
            setIsPostsLoading(false)    
        }, 1000)
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
            {isPostsLoading
                ?   <div style={{display: 'flex', justifyContent: "center", marginTop: '50px'}}>
                        <Loader></Loader>
                    </div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts}></PostList>
            }
        </div>
  );
}
export default App;