import * as React from 'react';
import Project from '../../Models/Project';

import ProjectsList from '../ProjectsList/ProjectsList';
import EmptyListWarning from '../EmptyListWarning/EmptyListWarning';

interface ProjectsListContainerState {
    loadingData: boolean,
    projects: Project[]
}

class ProjectsListContainer extends React.Component<any, ProjectsListContainerState> {

    private paths = {
        fetchAllProjects: '/Api/Projects'
    };

    constructor() {
        super();

        this.state = {
            loadingData: true,
            projects: []
        };
    }

    public componentDidMount() {
        fetch(this.paths.fetchAllProjects, { credentials: 'include' })
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                this.setState((state, props) => {
                    state.projects = JSON.parse(data);
                    state.loadingData = false;
                });
            });
    }

    public render() {
        const hasProjects = this.state.projects.length > 0;

        return (
            this.state.loadingData ?
               <p className='text-center'>Loading data...</p> :
               hasProjects ? <ProjectsList projects={this.state.projects} /> : <EmptyListWarning />
        )
    }
}

export default ProjectsListContainer;