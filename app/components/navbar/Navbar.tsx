import styles from '../../../styles/page.module.css';

const Navbar = () => {
  // check for user and admin

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>Welcome</div>
          <div className={styles.middle}>~~~~~~~~~~~~~~~~~~~</div>
          <div className={styles.right}>
            <div className={styles.btnGet}>Get Started</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
