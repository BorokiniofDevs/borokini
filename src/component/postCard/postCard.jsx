import Link from "next/link";
import styles from "./postCard.module.css";
import Image from "next/image";

function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/4240504/pexels-photo-4240504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={styles.img}
            fill
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.title}>Title</div>
        <div className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          nulla unde rem similique! Voluptas minima doloremque repellat,
          inventore necessitatibus exercitationem?
        </div>
        <Link href="/blog/post" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
