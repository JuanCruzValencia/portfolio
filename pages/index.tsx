import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/header/Navbar";
import { About } from "../components/main/About";
import { Contact } from "../components/main/Contact";
import { Hero } from "../components/main/Hero";
import { Projects } from "../components/main/Projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juan Cruz Valencia | Fron-End Developer</title>
        <meta name="description" content="Personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
