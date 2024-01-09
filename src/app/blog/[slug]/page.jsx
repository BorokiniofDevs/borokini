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

async function singleBlogPost(params) {
  console.log(params);
  const {
    params: { slug },
  } = params;

  // FETCH WITH AN API
  // const post = await getPost(slug);

  // FETCH WITHoUT AN API
  // const id = params
  const post = await getPost(slug);
  console.log(post);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/4240504/pexels-photo-4240504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title: {post?.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className={styles.avatar}
            alt=""
            height={50}
            width={50}
          />
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
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
}

export default singleBlogPost;
