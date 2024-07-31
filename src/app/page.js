import styles from '../styles/Home.module.css';
import Image from 'next/image';
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/next.svg"
            width={200}
            height={40}
            alt="User"
            // className={styles.profileImage}
          />
        </div>
        <div className={styles.formContainer}>
          <label htmlFor="username" className={styles.label}>
            <h3 className={styles.heading}>User name</h3>
            <input type="text" id="username" className={styles.input} />
          </label>
          <label htmlFor="password" className={styles.label}>
            <h3 className={styles.heading}>Password</h3>
            <input type="password" id="password" className={styles.input} />
          </label>
          <label htmlFor="rememberMe" className={styles.checkboxLabel}>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              value="Remember Me"
            />
            <span className={styles.checkboxText}>Remember Me</span>
            <button className={styles.button}>Login</button>
          </label>
        </div>
      </div>
      <div className={styles.links}>
        <a href="#" className={styles.link}>
          Lost your Password?
        </a>{' '}
        <a href="#" className={styles.link}>
          Go to Security Guard Company
        </a>
        <a href="#" className={styles.link}>
          XPressGuard
        </a>
      </div>
    </div>
  );
}
