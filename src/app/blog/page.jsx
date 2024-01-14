import PostCard from "@/component/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

//FETCH WITH TEST API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

//FETCH WITH OUR API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch data. Status: ${res.status} (${res.statusText})`
    );
  }

  return res.json();
};

export const metadata = {
  title: "Blog Page",
  description: "This page displays updated blog Post of the website",
};

async function blog() {
  // FECTCH WITH AN API
  const posts = await getData();

  // FECTCH WITHOUT AN API
  // const posts = await getPosts();
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
