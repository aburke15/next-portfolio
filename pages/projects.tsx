import { GetServerSidePropsContext, NextApiRequest, NextApiResponse, NextPage } from 'next';
import DataTable from 'react-data-table-component';
import Loading from './loading';

export const apiUrl = 'https://proj.aburke.tech/projects';

export type GitHubProject = {
  name: string;
  createdAt: string;
  description: string;
  htmlUrl: string;
  language: string;
};

const columns = [
  {
    name: 'Name',
    selector: (row: GitHubProject) => row.name,
    sortable: true,
  },
  {
    name: 'Description',
    selector: (row: GitHubProject) => row.description,
    sortable: false,
    wrap: true,
  },
  {
    name: 'Project Link',
    selector: (row: GitHubProject) => row.htmlUrl,
    sortable: false,
    cell: (row: GitHubProject) => (
      <a className="btn btn-secondary" target="_blank" rel="noopener noreferrer" href={row.htmlUrl}>
        Go to project
      </a>
    ),
  },
  {
    name: 'Created At',
    selector: (row: GitHubProject) => new Date(row.createdAt).toLocaleDateString(),
    sortable: false,
  },
  {
    name: 'Language',
    selector: (row: GitHubProject) => row.language,
    sortable: true,
    right: true,
  },
];

export interface ProjectPageProps {
  projects: GitHubProject[];
}

const Projects: NextPage<ProjectPageProps> = ({ projects }) => {
  return (
    <div id="projects" className="projects-section global-padding">
      <div className="container">
        <div className="row text-center">
          <h2>Projects</h2>
          <p className="b-underline"></p>
        </div>
        <div className="row global-margin">
          {!projects ? <Loading /> : <DataTable responsive columns={columns} data={projects} />}
        </div>
      </div>
    </div>
  );
};

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

export default Projects;
