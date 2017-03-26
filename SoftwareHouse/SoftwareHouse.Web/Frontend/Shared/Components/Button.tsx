import * as React from 'react';

interface ButtonProps {
    link?: boolean,
    href?: string,
    extraClassNames?: string[]
}

class Button extends React.Component<ButtonProps, any> {

    render() {
        const buttonClassNames = ['btn'].concat(this.props.extraClassNames || []).join(' ');

        if (this.props.link) {
            return <a href={this.props.href || '#'} className={buttonClassNames}>{this.props.children}</a>
        } else {
            return <button className={buttonClassNames}>{this.props.children}</button>
        }
    }

}

export default Button;