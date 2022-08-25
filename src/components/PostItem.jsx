import React from 'react';

const PostItem = (props) => {
    return (  
        <div className='post'>
            <div className='post_content'>
                <strong>{props.number}. {props.post.name}</strong>
                <div>
                    {props.post.info}
                </div>
            </div>    
            <div className='post_btn'>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;