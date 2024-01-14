"use server";
import { connectToDb } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {
  const { title, desc, userId, slug } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = await Post({
      title,
      desc,
      userId,
      slug,
    });
    await newPost.save();
    console.log("new Post saved to db");
    return newPost;
  } catch (error) {
    console.log(error);
    return "Something went wrong";
  }
};
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Post deleted from db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return "Something went wrong";
  }
};
