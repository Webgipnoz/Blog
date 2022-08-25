import React, {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'

function App() {
  const[posts, setPosts] = useState([
        {id:1, name:'JavaScripts', info:'Sanya hui sosi'},
        {id:2, name:'JavaScripts2', info:'Sanya hui sosi'},
        {id:3, name:'JavaScripts3', info:'Sanya hui sosi'},
    ])
    
    const[name, setName] = useState()
    const[info, setInfo] = useState()

    const addNewPost = (event) =>{
        const newPost ={
            name,
            info
        }
        setPosts([...posts, newPost])
        setName('')
        setInfo('')
    }
  
    return (
        <div className='App'>
            <div className='BlockPost'>
            <div>
                <MyInput 
                    type='text'
                    placeholder='Название поста' 
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>
            <div>    
                <MyInput 
                    type='text'
                    placeholder='Описание поста'
                    value={info}
                    onChange={event => setInfo(event.target.value)}    
                />
            </div>
            <MyButton onClick={addNewPost}>Create a Post</MyButton>
        </div>
            <PostList posts={posts}></PostList>
        </div>
  );
}
export default App;