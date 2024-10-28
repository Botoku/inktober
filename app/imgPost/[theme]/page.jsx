import React from "react";
import S3UploadForm from "@/app/components/S3UploadForm";
import ThemeStories from "@/app/components/ThemeStories";
const page = async ({ params }) => {
  const { theme } = params;
  console.log(theme);
  return (
    <div className="px-7 pt-5">
      <p className="uppercase font-bold ">{theme}</p>
      <ThemeStories theme={theme} />
      <S3UploadForm theme={theme} />
    </div>
  );
};

export default page;
