import styles from "./postUser.module.css";

const getUser = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

async function PostUser({ userId }) {
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.name}</span>
    </div>
  );
}

export default PostUser;
