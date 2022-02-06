import * as React from "react";

interface IHeaderButtonProps
{
    label: string;
    className?: string;
    hoverClassName?: string;
}

export class HeaderButton extends React.Component<IHeaderButtonProps>
{
    constructor(props) {
        super(props);

        this.changeColor = this.changeColor.bind(this);
        this.setDefaultColor = this.setDefaultColor.bind(this);
    }

    render()
    {
        let className = "header-action-button";
        if (this.props.className) {
            className = `${className} ${this.props.className}`;
        }

        return (
            <div
                className={className}
                onMouseOver={this.changeColor}
                onMouseOut={this.setDefaultColor}>
                {this.props.children}{this.props.label}
            </div>
        );
    }

    private changeColor(e)
    {
        if (! this.props.hoverClassName) {
            return;
        }

        e.target.classList.add(this.props.hoverClassName);
    }

    private setDefaultColor(e)
    {
        if (! this.props.hoverClassName) {
            return;
        }

        e.target.classList.remove(this.props.hoverClassName);
    }
}