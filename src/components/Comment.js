import React from "react";

const Comment = ({comment}) => {
    return (
        <div>
            <h4>{comment.name}</h4>
            <h6>{comment.email}</h6>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment;
