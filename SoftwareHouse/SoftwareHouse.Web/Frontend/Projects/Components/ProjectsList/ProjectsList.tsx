import * as React from 'react';

import './ProjectsList.scss';
import '../../../Shared/Styles/helpers.scss';

import Project from '../../Models/Project';
import ProjectsListSummary from '../ProjectsListSummary/ProjectsListSummary';
import ProjectsListItem from '../ProjectsListItem/ProjectsListItem';
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
                    <ProjectsListSummary projects={this.props.projects} />
                    {
                        this.props.projects.map(project => {
                            return <ProjectsListItem key={project.Id} project={project} />
                        })
                    }
                </div>
            </section>
        )
    }
  
}

export default ProjectsList;