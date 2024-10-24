'use client'
import React,{useState, useEffect} from 'react'

const ThemeStories = ({theme}) => {
    const [themeStoriesAvailable, setThemeStoriesAvailable] = useState(false)
    const [themeStories, setThemeStories] = useState([]);

    useEffect(() => {
        const fetchThemeStories = async () => {
            try {
              const res = await  fetch(`/api/post?theme=${theme}`)
              const data = await res.json()
              setThemeStories(data)
              setThemeStoriesAvailable(true)
            } catch (error) {
                console.log('Error fetching theme stories:', error);
            }
        }
        fetchThemeStories()
    },[theme])


  return (
    <div>ThemeStories

        <div>
            {themeStoriesAvailable && themeStories.map(post => <>
            <img src={post.imgUrl}/>
            <p>Artist:{post.artistName}</p>
            </>)}
        </div>
    </div>
  )
}

export default ThemeStories