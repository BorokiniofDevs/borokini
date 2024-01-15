// src/app/api/blog/[slug]/route.js

import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    // Check if params is defined and has a 'slug' property
    if (!params || !params.slug) {
      throw new Error('Missing or invalid "slug" parameter.');
    }

    const { slug } = params;
    connectToDb();

    const post = await Post.findOne({ slug });

    if (!post) {
      // Adjust the response as needed when the post is not found
      return NextResponse.notFound("Post not found");
    }

    return NextResponse.json(post);
  } catch (err) {
    console.error(err);
    return NextResponse.error("Failed to fetch post!", { status: 500 });
  }
};
