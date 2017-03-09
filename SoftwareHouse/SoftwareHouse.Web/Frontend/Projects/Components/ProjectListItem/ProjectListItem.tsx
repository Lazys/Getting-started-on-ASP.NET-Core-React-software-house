import * as React from 'react';

import './ProjectListItem.scss';
import Project from '../../Models/Project';

interface ProjectListItemProps {
    project: Project
}

class ProjectsListItem extends React.Component<ProjectListItemProps, any> {

    render() {
        return (
            <section className='ProjectsListItem'>
                <p>{this.props.project.Id}</p>
                <p>{this.props.project.Name}</p>
                <p>{this.props.project.Description}</p>
                <div className='ProjectsListItem-deleteBtn'>Usuń</div>
            </section>
        )
    }

}

export default ProjectsListItem;