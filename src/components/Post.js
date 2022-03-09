import React, {useState} from "react";
import CommentsManager from "./CommentsManager";

const Post = ({post}) => {
    const [showComments, setShowComments] = useState(false);

    const handleClick = () => {
        setShowComments(!showComments);
    }

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={handleClick}>Show Comments</button>
            { showComments && <CommentsManager /> }
        </div>
    )
}

export default Post;
