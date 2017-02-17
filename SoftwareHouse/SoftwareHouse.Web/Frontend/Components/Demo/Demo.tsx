import * as React from 'react';
import './Demo.scss';

interface DemoState {
    clicks: number;
}

interface DemoProps {
    firstName: string;
    lastName: string;
}

class Demo extends React.Component<DemoProps, DemoState> {

    onButtonClick() {
        this.setState({
            clicks: this.state.clicks + 1
        });
    }

    public render() {
        return (
            <div className="Demo">
                Hello, {`${this.props.firstName} ${this.props.lastName}`}
                <button onClick={this.onButtonClick} />
            </div>
        )
    }
}

export default Demo;