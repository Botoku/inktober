import connectionToDB from "@/lib/mongoose";
import Comment from "@/models/Comment";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectionToDB();
    const { userId, imageId, userName, commentText } = await request.json();

    const newComment = await Comment.create({
      userId,
      imageId,
      userName,
      commentText,
      timestamp: Date.now(),
    });
    return NextResponse.json({ newComment, status: 201 });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function GET(request) {
  try {
    await connectionToDB();

    const id = request.nextUrl.searchParams.get("id");
    const comments = await Comment.find({ imageId: id });
    return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json(error);
  }
}
