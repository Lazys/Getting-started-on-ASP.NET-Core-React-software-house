import * as React from 'react';

import './EmptyListWarning.scss';
import Button from '../../../Shared/Components/Button';

class EmptyListWarning extends React.Component<any, any> {

    private paths = {
        createProjectUrl: '/Projects/Add',
        createProjectLogo: ''
    };

    public render() {
        return (
            <section className='EmptyListWarning'>
                <img className='center-block' src='/images/List.png' />
                <section className='EmptyListWarning-textContainer'>
                    <p className='text-center'>It looks like you don't have any projects created.</p>
                    <p className='text-center'>
                        <Button link={true} href={this.paths.createProjectUrl} extraClassNames={['btn-success']}>
                            Create first project
                        </Button>
                    </p>
                </section>
            </section>
        )
    }
}

export default EmptyListWarning;