import React, {useState, useEffect} from "react";
import Post from "./Post";
import AddPost from "./AddPost";

const PostManager = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    const add = (post) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(r => setPosts([...posts, {
                userId: 1,
                id: posts.length + 1,
                title: post.title,
                body: post.body
            }]))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <AddPost add={add}/>
            <ul>
                {posts.map(post => <li key={post.id}>
                    <Post post={post}/>
                </li>)}
            </ul>
        </div>
    )
}

export default PostManager;
