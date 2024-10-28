"use client";
import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";

const ImageElement = ({ data }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comments?id=${data._id}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const fetchedData = await res.json();
        if (fetchedData && fetchedData.length > 0) {
          setComments(fetchedData);
        } else {
          console.log("No Comments available");
        }
      } catch (error) {
        console.log("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [data]);
  return (
    <div key={data._id}>
      <div className="flex">
        <div>
          <img src={`${data.imgUrl}`} className="max-w-32" alt="" />
        </div>
        <div>
          <div>
            <p className="mb-3">ARTISTA: {data.artistName}</p>
          </div>
          <div>
            <p>Comentarios</p>
            {comments?.map((comment, i) => (
              <div key={i}>
                <p>De: {comment.userName}</p>
                <p>{comment.commentText}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <CommentForm data={data} />
      </div>
    </div>
  );
};

export default ImageElement;
