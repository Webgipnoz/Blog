import React, {useState} from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'

function App() {
  const[posts, setPosts] = useState([
        {id:1, name:'JavaScripts', info:'Sanya hui sosi'},
        {id:2, name:'JavaScripts2', info:'Sanya hui sosi'},
        {id:3, name:'JavaScripts3', info:'Sanya hui sosi'},
    ])
    
    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts =(sort) =>{
        setSelectedSort(sort)
        console.log(sort)
    } 

    return (
        <div className='App'>
            <PostForm create={createPost}/>
            <hr style={{margin:'15px 0'}}></hr>
            <div>
                <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Sorting by'
                options={[
                        {value: 'name', name: 'By Name'},
                        {value: 'info', name: 'By Description'}
                    ]}
                />
            </div>
            {posts.length 
                ? 
                <PostList remove={removePost} posts={posts}></PostList>
                : 
                <h1 style={{textAlign: 'center'}}>
                    We don`t have posts
                </h1>
            }
        </div>
  );
}
export default App;