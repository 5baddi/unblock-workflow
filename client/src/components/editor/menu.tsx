import * as React from "react";
import { PUBLIC_URL } from "../../../../src/settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faQuestion, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DEFINITION_KEY } from "../../global";
import { IEditorMenuProps } from "../../interfaces";

class Menu extends React.Component<IEditorMenuProps>
{
    constructor(props)
    {
        super(props);

        this.editDefinitionProps = this.editDefinitionProps.bind(this);
        this.openTutorial = this.openTutorial.bind(this);
        this.clear = this.clear.bind(this);
    }
    render()
    {
        return (
            <div className="editor-menu">
                <button onClick={this.editDefinitionProps}>
                    <img src={`${PUBLIC_URL}/logo.jpg`} />
                </button>
                <button onClick={this.editDefinitionProps}>
                    <FontAwesomeIcon icon={faPen}/>
                </button>
                <button onClick={this.clear}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
                <button onClick={this.openTutorial}>
                    <FontAwesomeIcon icon={faQuestion}/>
                </button>
            </div>
        );
    }

    private editDefinitionProps()
    {
        if (typeof this.props.editor === "undefined") {
            return;
        }

        this.props.editor?.edit("properties");
    }

    private openTutorial()
    {
        if (typeof this.props.editor === "undefined") {
            return;
        }

        this.props.editor?.tutorial();
    }

    private clear()
    {
        if (typeof this.props.editor === "undefined") {
            return;
        }

        localStorage.removeItem(DEFINITION_KEY);

        this.props.editor?.clear();
    }
}

export default Menu;