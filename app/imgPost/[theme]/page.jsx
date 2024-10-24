"use client";
import React from "react";
import { useRouter } from "next/router";
import S3UploadForm from "@/app/components/S3UploadForm";
import ThemeStories from "@/app/components/ThemeStories";
const page = async ({ params }) => {
  const { theme } = params;
  console.log(theme);
  return (
    <div>
      {theme}
      <ThemeStories theme={theme} />
      <S3UploadForm theme={theme}/>
    </div>
  );
};

export default page;
