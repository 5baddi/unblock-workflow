import * as React from "react";
import { connect } from "react-redux";
import { getDefinition } from "../../store/actions/definition";
import * as PropTypes from "prop-types";
import { IDefinition, IEditorProps } from "../../interfaces";
import { loadDefaultDefinition } from "../../helpers";

class Editor extends React.Component<IEditorProps>
{
    constructor(props) {
        super(props);
    }

    static propTypes = {
        getDefinition: PropTypes.func.isRequired,
        definition: PropTypes.object.isRequired
    }

    static defaultProps = {
        definition: {} as IDefinition
    }

    render()
    {
        return (
            <h1>Editor: { this.props.definition?.name || "Unnamed"}</h1>
        );
    }
}


const mapStateToProps = (state) => ({
    definition: state.definition || loadDefaultDefinition()
});

const dispatchToProps = (dispatch) => ({
    getDefinition: () => dispatch(getDefinition())
});

export default connect(mapStateToProps, dispatchToProps)(Editor);