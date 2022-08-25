import React, { useState } from 'react';

const NewPost = () => {
    
    const[name, setName] = useState()
    const[info, setInfo] = useState()

    return (
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
            <button>Создать пост</button>
        </div>
    );
};

export default NewPost;