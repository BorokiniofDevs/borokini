"use client";
import PostUser from "@/component/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { getPost } from "@/lib/data";
import { Suspense } from "react";

// FETCH WITH AN API
// const getPost = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

export const generateMetaData = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

async function singleBlogPost({ params }) {
  console.log(params);
  // console.log(slug);
  // const {
  //   params: { slug },
  // } = params;

  const { slug } = params;

  // FETCH WITH AN API
  // const post = await getPost(slug);

  // FETCH WITHoUT AN API
  // const id = params
  const post = await getPost(slug);
  console.log(post);
  console.log(post.userId);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={post?.img} alt="" fill />
        </div>
      )}

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title: {post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...#</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailedText}>
            <span className={styles.detailedTitle}>Published</span>
            <span className={styles.detailedValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
}

export default singleBlogPost;
