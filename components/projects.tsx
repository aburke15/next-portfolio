import React, { useState, useEffect, FunctionComponent } from "react";
import DataTable from "react-data-table-component";
import Loading from "./loading";

type GitHubProject = {
  name: string;
  createdAt: string;
  description: string;
  htmlUrl: string;
  language: string;
};

const columns = [
  {
    name: "Name",
    selector: (row: GitHubProject) => row.name,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: GitHubProject) => row.description,
    sortable: false,
    wrap: true,
  },
  {
    name: "Project Link",
    selector: (row: GitHubProject) => row.htmlUrl,
    sortable: false,
    cell: (row: GitHubProject) => (
      <a
        className="btn btn-secondary"
        target="_blank"
        rel="noopener noreferrer"
        href={row.htmlUrl}
      >
        Go to project
      </a>
    ),
  },
  {
    name: "Created At",
    selector: (row: GitHubProject) =>
      new Date(row.createdAt).toLocaleDateString(),
    sortable: false,
  },
  {
    name: "Language",
    selector: (row: GitHubProject) => row.language,
    sortable: true,
    right: true,
  },
];

interface ILocalState {
  projects: Array<GitHubProject>;
  isLoading: boolean;
}

const defaultState: ILocalState = {
  projects: [],
  isLoading: false,
};

export const getStaticProps = async () => {
  const url = "https://portfolio-be.azurewebsites.net/api/GitHub/repos";
  const res = await fetch(url);
  const data: Array<GitHubProject> = await res.json();

  return {
    props: { projects: data },
    revalidate: 259200, // In seconds, 3 days
  };
};

const Projects: FunctionComponent = () => {
  const [localState, setLocalState] = useState(defaultState);

  useEffect(() => {
    setLocalState((s) => ({ ...s, isLoading: true }));
    getStaticProps()
      .then((staticProps) => {
        setLocalState((s) => ({
          ...s,
          projects: staticProps.props.projects,
          isLoading: false,
        }));
      })
      .catch((error) => {
        console.log(error);
        setLocalState((s) => ({ ...s, isLoading: false }));
      });
  }, []);

  return (
    <div id="projects" className="projects-section global-padding">
      <div className="container">
        <div className="row text-center">
          <h2>Projects</h2>
          <p className="b-underline"></p>
        </div>
        <div className="row global-margin">
          {localState.isLoading ? (
            <Loading />
          ) : (
            <DataTable
              responsive
              columns={columns}
              data={localState.projects}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
