// const users =[
// {id : 1 , name : "Jaffer Joffery"},
// {id : 2 , name : "Toby Maguire"},
// {id : 3 , name : "Esquire Mandeley"},
// ]

import { unstable_noStore } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";

// const posts =[
//     {
//     "userId": 1,
//     "id": 1,
//     "title": "Post 1",
//     "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "Post 2",
//     "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 2,
//     "id": 3,
//     "title": "Post 3",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   },
//   {
//     "userId": 2,
//     "id": 4,
//     "title": "Post 4",
//     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//   },
// ]

export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
// export const getPost = async(id)=> {
//    const post = posts.find((post)=> post.id === parseInt(id))
// return post;

export const getPost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  // return users.find((user)=> user.id === parseInt(id))
  unstable_noStore();

  try {
    await connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while fetching user");
  }
};

export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while fetching user");
  }
};
