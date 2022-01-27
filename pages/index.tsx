import type { NextPage } from "next";
import Bio from "../components/bio";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Resume from "../components/resume";
import Skills from "../components/skills";
import Title from "../components/title";

const Home: NextPage = () => {
  return (
    <div className="portfolio-font">
      <Navbar />
      <Title />
      <Bio />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
