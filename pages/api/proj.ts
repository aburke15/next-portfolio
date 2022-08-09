import { GitHubProject } from '../projects';

export const getMockProjects = (): GitHubProject[] => {
  const projects: GitHubProject[] = [];

  for (let index = 0; index < 20; index++) {
    projects.push({
      name: `Spoof Project ${index}`,
      createdAt: new Date().toDateString(),
      description: 'A place holder project since the real ones failed to load',
      htmlUrl: 'https://github.com/aburke15?tab=repositories',
      language: 'Typescript',
    });
  }

  return projects;
};
