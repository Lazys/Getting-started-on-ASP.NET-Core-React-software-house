import * as React from 'react';
import './Demo.scss';

interface ComponentProps {
    blogName: string;
}

interface ComponentState {
    counter: number;
}

class Demo extends React.Component<ComponentProps, ComponentState> {

    constructor(props) {
        super(props);
        
        this.state = {
            counter: 0
        }
    }

    onButtonClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    public render() {
        return (
            <div className={'Demo'} style={ {marginTop: '150px'} }>
                <p>Hello world from { this.props.blogName }</p>
                <p>Counter: {this.state.counter} </p>
                <button onClick={() => this.onButtonClick() }> Click me </button>
            </div>
        )
    }
}

export default Demo;