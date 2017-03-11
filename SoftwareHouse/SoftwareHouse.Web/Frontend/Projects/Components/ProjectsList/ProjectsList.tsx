import * as React from 'react';

import './ProjectsList.scss';
import '../../../Shared/Styles/helpers.scss';

import Project from '../../Models/Project';
import ProjectListItem from '../ProjectListItem/ProjectListItem';
import Button from '../../../Shared/Components/Button';

interface ProjectsListProps {
    projects: Project[]
}

class ProjectsList extends React.Component<ProjectsListProps, any> {

    private paths = {
        createProjectUrl: '/Projects/Add'
    };

    render() {
        return (
            <section className='ProjectsList row'>
                <div className='col-md-8 col-md-push-2'>
                    <div className='ProjectsList-summary row'>
                        <div className='col-md-6 padding-none'>
                            <p className='ProjectList-summaryText'>Number of projects: <strong>{this.props.projects.length}</strong></p>
                        </div>
                        <div className='col-md-6 padding-none'>
                            <Button link={true} href={this.paths.createProjectUrl} extraClassNames={['btn-success', 'pull-right']}>Start new project</Button>
                        </div>
                    </div>
                    <div className='ProjectsList-content row'>
                        {
                            this.props.projects.map(project => {
                                return <ProjectListItem key={project.Id} project={project} />
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
  
}

export default ProjectsList;