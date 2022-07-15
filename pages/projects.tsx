import { GetServerSidePropsContext, NextPage } from 'next';
import DataTable from 'react-data-table-component';
import Loading from './loading';

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const headers: Headers = new Headers();
  let origin = process.env.ORIGIN as string;

  headers.append('Origin', origin);

  const url = 'https://84z5r9anq8.execute-api.us-west-2.amazonaws.com/prod/';
  const res = await fetch(url);
  const data: GitHubProject[] = await res.json();

  return {
    props: {
      projects: data,
    },
  };
}

export default Projects;
