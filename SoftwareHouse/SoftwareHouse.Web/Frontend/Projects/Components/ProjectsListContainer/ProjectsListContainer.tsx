import * as React from 'react';

import EmptyListWarning from '../EmptyListWarning/EmptyListWarning';

interface ProjectsListState {
    projects: number[]
}

class ProjectsListContainer extends React.Component<any, ProjectsListState> {

    constructor(props) {
        super(props);

        this.state = {
            projects: []
        };
    }

    public render() {

        const hasProjects = this.state.projects.length > 0;

        return (
            <EmptyListWarning />
        )

    }
}

export default ProjectsListContainer;