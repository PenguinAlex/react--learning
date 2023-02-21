import React, {useState} from "react";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
    const [posts, setPosts] = useState([
        {id:1, title:'JavaScript', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, deserunt.'},
        {id:2, title:'JavaScript', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, deserunt.'},
        {id:3, title:'JavaScript', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, deserunt.'},
        {id:4, title:'JavaScript', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, deserunt.'},
        {id:5, title:'JavaScript', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, deserunt.'}
    ])
  return (
    <div className="App">
        <form action="">
            <MyInput type="text" placeholder="Название поста"/>
            <MyInput type="text" placeholder="Описание поста"/>
            <MyButton disabled>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title = "Список постов 1"/>
    </div>
  );
}

export default App;
