import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Tutors from "../components/Tutors";
import Hero from "../components/Hero";
import CourseStack from "../components/CourseStack";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Special from "../components/Special";

export default function Home() {
  return (
    <>
      <Head>
        <title>Webdiary Academy</title>
        <meta
          name='description'
          content='Kickstart Your ReactJS Developer Career'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Main>
          <Hero />
          {/* <Special /> */}
          <Tutors />
          <Projects />
          <Testimonials />
          <Contact />
        </Main>
      </Layout>
    </>
  );
}
