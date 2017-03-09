import * as React from 'react';

import Project from '../../Models/Project';

import ProjectsList from '../ProjectsList/ProjectsList';
import EmptyListWarning from '../EmptyListWarning/EmptyListWarning';

interface ProjectsListState {
    projects: Project[]
}

class ProjectsListContainer extends React.Component<any, ProjectsListState> {

    constructor(props) {
        super(props);
    }

    public componentWillMount() {
        this.setState((state, props) => {
            state.projects = [
                { Id: 1, Name: 'aaa', Description: 'test 1', CreationDate: new Date() },
                { Id: 2, Name: 'bbb', Description: 'test 2', CreationDate: new Date() },
                { Id: 3, Name: 'ccc', Description: 'test 3', CreationDate: new Date() }
            ]
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