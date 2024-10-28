"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";

const S3UploadForm = ({ theme }) => {
  let data;
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { user } = useUser();

  const handleFormSubmit = async (e) => {
    const sendDataToMongo = () => {
      console.log("send mongo");
      console.log(
        `https://inktober-lvt.s3.us-east-2.amazonaws.com/${data.fileName.file}`
      );
      console.log(theme);
      console.log(user?.id);
      console.log(user?.fullName);
      fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({
          imgUrl: `https://inktober-lvt.s3.us-east-2.amazonaws.com/${data.fileName.file}`,
          theme,
          artistClerkID: user?.id,
          artistName: user?.fullName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((fin) => {
          return fin;
        });
    };
    e.preventDefault();
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      data = await res.json();

      sendDataToMongo();
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="mt-10">
      <p>{user ? "Upload your Image" : "Log In to upload your image"} </p>
      {user && (
        <form onSubmit={handleFormSubmit}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button type="submit" disabled={!file || uploading}>
            {uploading ? "Uploading.." : "Upload"}
          </button>
        </form>
      )}
    </div>
  );
};

export default S3UploadForm;
