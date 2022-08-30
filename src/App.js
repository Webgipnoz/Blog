import React, {useMemo, useState} from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'

function App() {
  const[posts, setPosts] = useState([
        {id:1, name:'aaaa', info:'ccccct Js'},
        {id:2, name:'bbbbb2', info:'aaaaaaut Js'},
        {id:3, name:'cccccc3', info:'bbbbbsout Js'},
    ])
    
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() =>{
        console.log("SRABOTALO")
        if(selectedSort){
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))    
        }
        return posts;
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.info.includes(searchQuery))
    }, [searchQuery, sortedPosts])

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts =(sort) =>{
        setSelectedSort(sort)
    } 

    return (
        <div className='App'>
            <PostForm create={createPost}/>
            <hr style={{margin:'15px 0'}}></hr>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search.........."
                />
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
                <PostList remove={removePost} posts={sortedAndSearchedPosts}></PostList>
                : 
                <h1 style={{textAlign: 'center'}}>
                    We don`t have any posts
                </h1>
            }
        </div>
  );
}
export default App;