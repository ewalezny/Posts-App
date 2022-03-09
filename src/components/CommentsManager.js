import React, {useState, useEffect} from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";

const CommentsManager = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then(data => setComments(data))
    }, [])

    const add = (comment) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(r => setComments([...comments, {
                postId: 1,
                id: comment.length + 1,
                name: comment.name,
                email: comment.email,
                body: comment.body
            }]))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <AddComment add={add}/>
            <ul>
                {comments.map(comment => <li key={comment.id}>
                    <Comment comment={comment}/>
                </li>)}
            </ul>
        </div>
    )
}

export default CommentsManager;
