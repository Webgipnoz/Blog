import React, { useState } from 'react';
import PostItem from './PostItem';

const Posts = () => {
    const[posts, setPosts] = useState([
        {id:1, name:'JavaScripts', info:'Sanya hui sosi'},
        {id:2, name:'JavaScripts2', info:'Sanya hui sosi'},
        {id:3, name:'JavaScripts3', info:'Sanya hui sosi'},
    ])
    
    const[name, setName] = useState()
    const[info, setInfo] = useState()

    const addNewPost = (e) =>{
        const newPost ={
            name,
            info
        }
        setPosts([...posts, newPost])
        setName('')
        setInfo('')
    }

    return (
        <div>
            <div className='BlockPost'>
            <div>
                <input 
                    type='text'
                    placeholder='Название поста' 
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>
            <div>    
                <input 
                    type='text'
                    placeholder='Описание поста'
                    value={info}
                    onChange={event => setInfo(event.target.value)}    
                />
            </div>
            <button onClick={addNewPost}>Создать пост</button>
        </div>
        <h1>Список Постов</h1>
        {posts.map((post, index) => 
            <PostItem number={index + 1} post={post} key={post.id}/>
        )}
        </div>
    );
};

export default Posts;