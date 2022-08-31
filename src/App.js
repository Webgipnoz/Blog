import React, {useMemo, useState} from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import './styles/App.css'

function App() {
  const[posts, setPosts] = useState([
        {id:1, name:'aaaa', info:'ccccct Js'},
        {id:2, name:'bbbbb2', info:'aaaaaaut Js'},
        {id:3, name:'cccccc3', info:'bbbbbsout Js'},
    ])

    const[filter, setFilter] = useState({sort:'', query:''});   
    const[modal, setModal] = useState(false);

    const sortedPosts = useMemo(() =>{
        console.log("SRABOTALO")
        if(filter.sort){
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))    
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.info.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

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
                create user
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin:'15px 0'}}></hr>
            <PostFilter 
                filter={filter}
                setFilter={setFilter}
            />
                <PostList remove={removePost} posts={sortedAndSearchedPosts}></PostList>
        </div>
  );
}
export default App;