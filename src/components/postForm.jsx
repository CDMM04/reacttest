import React, {useState} from "react";
import MyButton from "./UI/button/myButton";
import MyInput from "./UI/input/myInput";



const PostForm = ({create}) => {
    
    const [post, setPost] = useState({title:'', body:''})
    const addNewPost = (e)=>{
        e.preventDefault()
        const NewPost ={
            ...post, id: Date.now()
        }
        create(NewPost)
        setPost({title:'', body:''})
    }
    return(
        <form>
              <MyInput 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="Название поста"
              />
              <MyInput 
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder="Описание поста"
              />
              <MyButton onClick={addNewPost}>Разместить пост</MyButton>
        </form>
    )
}

export default PostForm;