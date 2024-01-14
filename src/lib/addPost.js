import { connectToDb } from "./utils";
import { Post } from "./models";

const addPost = async (formData) => {
  "use server";
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

export default addPost;
