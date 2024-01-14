import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

// FETCH WITH AN API
// const getUser = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

async function PostUser({ userId }) {
  // FETCH WITH AN API
  // const user = await getUser(userId);

  // FETCH WITHOUT AN API
  const user = await getUser(userId);
  console.log(user);
  return (
    <div className={styles.container}>
      <Image
        src={user?.img ? user.img : "/noUser.png"}
        className={styles.avatar}
        alt=""
        height={50}
        width={50}
      />
      <div className={styles.texts}></div>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
}

export default PostUser;
