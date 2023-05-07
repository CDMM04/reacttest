import React, {useState} from "react";
// import Counter from "./components/counter";
import './styles/App.css';
import PostItem from './components/postItem';
import PostList from './components/postList';
import PostForm from "./components/postForm";
import MySelect from "./components/UI/select/mySelect";

function App() {
        const[posts, setPosts] = useState([
          {id: 1, title: 'aa', body: 'bbb'},
          {id: 2, title: 'dd 2', body: 'aaa'},
          {id: 3, title: 'gg 3', body: 'xxx'},
        ])

        const [selectedSort, setSelectedSort] = useState('')

        const createPost = (newPost) =>{
          setPosts([...posts, newPost])
        }
        
        const removePost = (post) =>{
          setPosts(posts.filter(p => p.id !== post.id))
        }

        const sortPosts = (sort) => {
          setSelectedSort(sort);
          setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
        }
    
        return (
          <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
              <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Sort by"
                options={[
                  {value: 'title', name: 'By title'},
                  {value: 'body', name: 'By description'},
                ]}
              />
            </div>
            
            {posts.length !==0
            ? 
            <PostList remove={removePost} posts={posts} title="Посты про JS"/>
            : 
            <h1 style={{textAlign: "center"}}>There were no posts found!</h1>
            }
            

          </div>
  );
}

export default App;
