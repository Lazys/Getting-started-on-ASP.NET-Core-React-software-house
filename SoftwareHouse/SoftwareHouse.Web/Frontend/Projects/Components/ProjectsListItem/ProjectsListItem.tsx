import * as React from 'react';
import * as moment from 'moment';

import './ProjectsListItem.scss';
import Project from '../../Models/Project';

interface ProjectListItemProps {
    key: number,
    project: Project
}

class ProjectsListItem extends React.Component<ProjectListItemProps, any> {

    render() {
        return (
            <a href={`/Projects/Details/${this.props.project.Id}`}>
                <div className='ProjectsListItem row'>
                    <div className='col-md-12'>
                        <div className='ProjectsListItem-summary row'>
                            <div className='col-md-6 padding-none'>
                                <span className='ProjectsListItem-name'>{this.props.project.Name}</span>
                            </div>
                            <div className='col-md-6 padding-none'>
                                <span className='pull-right'>
                                    <span className='glyphicon glyphicon-calendar'></span> {moment(this.props.project.CreationDate).format("DD-MM-YYYY")}
                                </span>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12 padding-none'>
                                <span className='ProjectsListItem-description'>{this.props.project.Description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        )
    }

}

export default ProjectsListItem;

