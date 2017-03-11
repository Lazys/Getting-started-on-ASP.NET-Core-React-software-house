import * as React from 'react';
import Project from '../../Models/Project';

import ProjectsList from '../ProjectsList/ProjectsList';
import EmptyListWarning from '../EmptyListWarning/EmptyListWarning';

interface ProjectsListState {
    projects: Project[]
}

class ProjectsListContainer extends React.Component<any, ProjectsListState> {

    constructor() {
        super();

        this.state = {
            projects: []
        };
    }

    public componentWillMount() {
        fetch('/Api/Projects')
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                let projects = JSON.parse(data);
                debugger;
                
                this.setState((state, props) => {
                    state.projects = projects;
                });
            });
    }

    public render() {

        const hasProjects = this.state.projects.length > 0;

        return (
            hasProjects ? <ProjectsList projects={this.state.projects} /> : <EmptyListWarning />
        )

    }
}

export default ProjectsListContainer;