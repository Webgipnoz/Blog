import React, {useState} from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import './styles/App.css'

function App() {
  const[posts, setPosts] = useState([
        {id:1, name:'JavaScripts', info:'Sanya hui sosi'},
        {id:2, name:'JavaScripts2', info:'Sanya hui sosi'},
        {id:3, name:'JavaScripts3', info:'Sanya hui sosi'},
    ])
      
    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }

    return (
        <div className='App'>
            <PostForm create={createPost}/>
            <PostList posts={posts}></PostList>
        </div>
  );
}
export default App;