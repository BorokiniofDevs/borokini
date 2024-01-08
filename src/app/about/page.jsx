import Image from "next/image";
import styles from "./about.module.css";

function about() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About the Dev.</h2>
        <h1 className={styles.title}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        </h1>
        <p className={styles.desc}>
          Consectetur adipisicing elit. Debitis non perferendis beatae quae,
          atque dolorum aut enim veniam delectus, recusandae, voluptatibus sunt
          distinctio. Consequatur fuga a, tempore est esse at illo id officiis.
          Praesentium, repellat nam! Odio commodi quos ad.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>No of followers</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>No of followers</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>No of followers</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.jpg" alt="" className={styles.img} fill />
      </div>
    </div>
  );
}

export default about;
