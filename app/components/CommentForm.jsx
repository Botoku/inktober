"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";


const CommentForm = ({data}) => {
  const { user } = useUser();

  const [commentText, setCommentText] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        userId: user?.id,
        imageId: data._id,
        userName: user?.fullName,
        commentText 
      }),
    });

    if ((res.status == 200)) {
      setCommentText('')
      // setName("");
      // setRole("");
      // setDob("");
      // setOrigin("");
      // setHobbies("");
      // setFeedback("Success");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Comment: </label>
          <input value={commentText} onChange={e => setCommentText(e.target.value)} type="text" name="" id="comment" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default CommentForm;
