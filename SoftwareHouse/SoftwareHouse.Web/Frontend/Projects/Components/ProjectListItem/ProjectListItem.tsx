import * as React from 'react';
import * as moment from 'moment';

import './ProjectListItem.scss';
import Project from '../../Models/Project';

interface ProjectListItemProps {
    project: Project
}

class ProjectsListItem extends React.Component<ProjectListItemProps, any> {

    render() {
        return (
            <section className='ProjectsListItem'>
                <p className='ProjectsListItem-date'>
                    <span className='glyphicon glyphicon-calendar'></span> { moment(this.props.project.CreationDate).format('DD-MM-YYYY') }
                </p>
                <p>{this.props.project.Name}</p>
                <p>{this.props.project.Description}</p>
            </section>
        )
    }

}

export default ProjectsListItem;

