import Link from "next/link";
import styles from "./postCard.module.css";
import Image from "next/image";

function PostCard({ post }) {
  // console.log(post.slug);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {post.img && (
            <Image src={post.img} alt="" className={styles.img} fill />
          )}
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.title}>Title: {post.title}</div>
        <div className={styles.desc}>{post.body}</div>
        {/* <Link href={`/blog/${post.id}`} className={styles.link}>
          Read More
        </Link> */}
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
