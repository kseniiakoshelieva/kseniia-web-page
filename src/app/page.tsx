import styles from "./page.module.css";
import { Header } from "./components/Header";
import { SendEmailForm } from "./components/SendEmailForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <SendEmailForm />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
