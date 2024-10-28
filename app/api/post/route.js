import connectionToDB from "@/lib/mongoose";
import Post from "@/models/Post";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    await connectionToDB();
    const { artistName, artistClerkID, imgUrl, theme } = await request.json();

    const newPost = await Post.create({
      artistName,
      artistClerkID,
      imgUrl,
      theme,
    });
    return NextResponse.json({ newPost, status: 201, user, userId });
  } catch (error) {
    console.log(error)
    return NextResponse.json(error);
  }
}


export async function GET(request){
  await connectionToDB();
  try {
    const theme = request.nextUrl.searchParams.get('theme')
    const posts = await Post.find({theme})
    console.log(posts)
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(error);
    
  }
   
}