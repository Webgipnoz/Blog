import React, { useState } from 'react';

const NewPost = () => {
    
    const[name, setName] = useState()
    const[info, setInfo] = useState()

    return (
        <div className='Posts'>
            <h1>Блог о том и этом</h1>
            <h2>{name}</h2>
            <h2>{info}</h2>
            <input 
                type='text' 
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <input 
                type='text'
                value={info}
                onChange={event => setInfo(event.target.value)}    
            />
            <button>Создать пост</button>
        </div>
    );
};

export default NewPost;