import styles from "./page.module.css";
import { Header } from "./components/Header";

import { About } from "./sections/About";
import { Contact } from "./sections/Contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <About />
        <Contact />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
