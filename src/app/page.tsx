import styles from "./page.module.css";
import { SendEmailForm } from "./components/SendEmailForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>
        <SendEmailForm />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
