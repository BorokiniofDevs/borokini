import PostCard from "@/component/postCard/postCard";
import styles from "./blog.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
async function blog() {
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts && Array.isArray(posts) ? (
        posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default blog;
