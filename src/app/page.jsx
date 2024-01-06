import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>The Developers secret.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          recusandae deleniti.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}> Learn more</button>
          <button className={styles.button}> Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" className={styles.brand} alt="" fill />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.jpg" alt="" className={styles.heroImg} fill />
      </div>
    </div>
  );
};

export default Home;
