import * as React from 'react';
import './ProjectsList.scss';

class ProjectsList extends React.Component<any, any> {

    public numbers: number[] = [1, 2, 3, 4, 5];

    public render() {

        return (
            <div className={'ProjectsList'} >
                <h3>Projects List</h3>
                <ul>
                    {this.numbers.map((number) =>
                        <li key={number.toString()}>
                            {number}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default ProjectsList;