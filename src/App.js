import React, {useMemo, useState} from "react";
// import Counter from "./components/counter";
import './styles/App.css';
import PostItem from './components/postItem';
import PostList from './components/postList';
import PostFilter from "./components/postFilter";
import PostForm from "./components/postForm";
import MySelect from "./components/UI/select/mySelect";
import MyInput from "./components/UI/input/myInput";

function App() {
        const[posts, setPosts] = useState([
          {id: 1, title: 'aa', body: 'bbb'},
          {id: 2, title: 'dd 2', body: 'aaa'},
          {id: 3, title: 'gg 3', body: 'xxx'},
        ])

        const [filter, setFilter] = useState({sort: '', query: ''})

        const sortedPosts = useMemo(() => {
          if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
          }
          return posts;
        }, [filter.sort, posts])

        const sortedAndSearchedPosts = useMemo(() => {
          return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLocaleLowerCase()))
        }, [filter.query, sortedPosts])

        const createPost = (newPost) =>{
          setPosts([...posts, newPost])
        }
        
        const removePost = (post) =>{
          setPosts(posts.filter(p => p.id !== post.id))
        }

        return (
          <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
              filter={filter}
              setFilter={setFilter}
            />
            
            {sortedAndSearchedPosts.length !==0
            ? 
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
            : 
            <h1 style={{textAlign: "center"}}>There were no posts found!</h1>
            }
            

          </div>
  );
}

export default App;
