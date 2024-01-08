import styles from "./singlePost.module.css";
import Image from "next/image";

function singleBlogPost() {
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
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className={styles.avatar}
            alt=""
            height={50}
            width={50}
          />
          <div className={styles.detailedText}>
            <span className={styles.detailedTitle}>Author</span>
            <span className={styles.detailedValue}>Borokini</span>
          </div>
          <div className={styles.detailedText}>
            <span className={styles.detailedTitle}>Published</span>
            <span className={styles.detailedValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi velit
          est illum, recusandae, adipisci tenetur quia excepturi porro aut
          dignissimos in deleniti voluptatum sint dolorum vero reprehenderit cum
          nihil. Porro assumenda necessitatibus eos inventore! Ut cupiditate
          odit omnis consequuntur quam!
        </div>
      </div>
    </div>
  );
}

export default singleBlogPost;
