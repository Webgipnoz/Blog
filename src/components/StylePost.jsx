import React from 'react';

const StylePost = (props) => {
    return (  
        <div className='post'>
            <div className='post_content'>
                <strong>{props.number}. {props.post.name}</strong>
                <div>
                    {props.post.info}
                </div>
            </div>    
            <div className='post_btn'>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default StylePost;