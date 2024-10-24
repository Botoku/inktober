"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";

const S3UploadForm = ({ theme }) => {
    let data
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { user } = useUser();


  const handleFormSubmit = async (e) => {
    const sendDataToMongo = () => {
        console.log("send mongo")
        console.log( `https://inktober-lvt.s3.us-east-2.amazonaws.com/${data.fileName.file}`)
        console.log(theme)
        console.log(user?.id)
        console.log(user?.fullName)
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
          }
         }).then(response =>{
           return response.json()
         }).then(fin => {
            console.log("fin",fin)
            return fin
         })
   }
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
      console.log(res);
       data = await res.json();
      console.log("data");
      console.log("data", data.fileName.file);
      console.log(data.status);

      sendDataToMongo()
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
    <div>
      <h1>Upload files to s3 Bucket</h1>
      {}
      <form onSubmit={handleFormSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit" disabled={!file || uploading}>
          {uploading ? "Uploading.." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default S3UploadForm;


