import * as React from 'react';

interface ButtonProps {
    link: boolean,
    href: string,
    extraClassNames: string[]
}

class Button extends React.Component<ButtonProps, any> {

    public render() {

        let classNames = ['btn'].concat(this.props.extraClassNames).join(' ');

        if (this.props.link) {
            return <a className={classNames} href={this.props.href}>{this.props.children}</a>
        } else {
            return <button className={classNames}>{this.props.children}</button>
        }
       
    }
}

export default Button;