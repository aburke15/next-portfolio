import type { GetServerSidePropsContext, NextPage, NextApiRequest, NextApiResponse } from 'next';
import Bio from './bio';
import Contact from './contact';
import Navbar from './navbar';
import Projects, { apiUrl, GitHubProject, ProjectPageProps } from './projects';
import Resume from './resume';
import Skills from './skills';
import Title from './title';

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=3600, stale-if-error=3600');

  const headers: Headers = new Headers();
  let origin = process.env.ORIGIN as string;

  headers.append('Origin', origin);

  const response = await fetch(apiUrl, { headers });
  const data: GitHubProject[] = await response.json();

  return {
    props: {
      projects: data,
    },
  };
}

const Home: NextPage<ProjectPageProps> = ({ projects }) => {
  return (
    <div className="portfolio-font">
      <Navbar />
      <Title />
      <Bio />
      <Skills />
      <Resume />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
};

export default Home;
