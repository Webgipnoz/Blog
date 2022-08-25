import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const[post, setPost] = useState({name:'', info:''})

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost ={
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({name:'', info:''})
    }

    return (
        <form>    
            <MyInput 
                value={post.name}
                onChange={event => setPost({...post, name: event.target.value})}
                type='text'
                placeholder='Name of the post' 
                />  
            <MyInput 
                value={post.info}
                onChange={event => setPost({...post, info: event.target.value})}    
                type='text'
                placeholder='Description of post'
            />
            <MyButton onClick={addNewPost}>Create a Post</MyButton>
        </form>    
    );
};

export default PostForm;