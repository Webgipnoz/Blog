import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const[post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost ={
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
    }

    return (
        <form>    
            <MyInput 
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
                type='text'
                placeholder='Name of the post' 
                />  
            <MyInput 
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}    
                type='text'
                placeholder='Description of post'
            />
            <MyButton onClick={addNewPost}>Create a Post</MyButton>
        </form>    
    );
};

export default PostForm;