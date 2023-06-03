import Head from "next/head";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/header/Navbar";
import { About } from "../components/main/About";
import { Contact } from "../components/main/Contact";
import { Hero } from "../components/main/Hero";
import { Projects } from "../components/main/Projects";
import Layout from "../components/main/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Cruz Valencia | Fron-End Developer</title>
        <meta name="description" content="Personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <Layout>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </Layout>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
