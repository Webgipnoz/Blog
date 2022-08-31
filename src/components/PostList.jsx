import React from 'react';
import PostItem from './PostItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({posts, remove}) => {
    
    if(!posts.length){ 
        return(
            <h1 style={{textAlign:'center'}}>
                We don`t have any posts
            </h1>
        )
    }
    
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                Posts about JS
            </h1>
            <TransitionGroup>
                {posts.map((post, index) => 
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;