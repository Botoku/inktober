"use client";
import React, { useState, useEffect } from "react";
import ImageElement from "./ImageElement";
import { useUser } from "@clerk/nextjs";

const ThemeStories = ({ theme }) => {
  const [themeStoriesAvailable, setThemeStoriesAvailable] = useState(false);
  const [themeStories, setThemeStories] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchThemeStories = async () => {
      try {
        const res = await fetch(`/api/post?theme=${theme}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        if (data && data.length > 0) {
          setThemeStories(data);
          setThemeStoriesAvailable(true);
          console.log(data);
        } else {
          console.log("No theme stories available");
        }
      } catch (error) {
        console.log("Error fetching theme stories:", error);
      }
    };
    fetchThemeStories();
  }, [theme]);

  return (
    <div>
      <div>
        {themeStories &&
          themeStories?.map((post, i) => (
            <div key={i}>
              <ImageElement data={post} />
            </div>
          ))}
      </div>
      <div>
        {!user && <p>Sign In to leave a comment</p>}
      </div>
    </div>
  );
};

export default ThemeStories;
