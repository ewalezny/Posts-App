import React, {useState} from "react";
import CommentsManager from "./CommentsManager";
import styles from "./post.module.scss";

const Post = ({post}) => {
    const { single_post, btn } = styles;

    const [showComments, setShowComments] = useState(false);

    const handleClick = () => {
        setShowComments(!showComments);
    }

    return (
        <div className={single_post}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button className={btn} onClick={handleClick}>{ !showComments ? "Show Comments" : "Hide Comments"}</button>
            { showComments && <CommentsManager /> }
        </div>
    )
}

export default Post;
