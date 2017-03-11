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
    }

    public componentWillMount() {
        this.setState((state, props) => {
            state.projects = []
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