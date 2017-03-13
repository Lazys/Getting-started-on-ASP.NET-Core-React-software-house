import * as React from 'react';

import Project from '../../Models/Project';
import Button from '../../../Shared/Components/Button';

interface ProjectsListProps {
    projects: Project[]
}

class ProjectsListSummary extends React.Component<ProjectsListProps, any> {

    private paths = {
        createProjectUrl: '/Projects/Add'
    };

    render() {
        return (
            <div className='row'>
                <div className='ProjectsList-summary col-md-12'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='ProjectList-summaryText'>Number of projects: <strong>{this.props.projects.length}</strong></p>
                        </div>
                        <div className='col-md-6'>
                            <Button link={true} href={this.paths.createProjectUrl} extraClassNames={['btn-success', 'pull-right']}>Start new project</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProjectsListSummary;