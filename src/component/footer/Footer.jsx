import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Borokini</div>
      <div className={styles.text}>
        BorokiniOfDevs stash all rights reserved
      </div>
    </div>
  );
}

export default Footer;
