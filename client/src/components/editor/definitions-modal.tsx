import * as React from "react";
import { Button, Modal, Table, ButtonGroup } from "react-bootstrap";
import { IDefinition, IEditorDefinitionsModalProps, IEditorDefinitionsModalState } from "../../interfaces";
import API from "../../api";
import { PUBLIC_URL } from "../../../../src/settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faTrash, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import {DEFINITION_KEY} from "../../global";

class DefinitionsModal extends React.Component<IEditorDefinitionsModalProps, IEditorDefinitionsModalState>
{
    constructor(props)
    {
        super(props);

        this.state = {
            definitions: []
        }

        this.loadDefinitions = this.loadDefinitions.bind(this);
        this.renderDefinitionsTable = this.renderDefinitionsTable.bind(this);
    }

    componentDidMount()
    {
        this.loadDefinitions();
    }

    componentDidUpdate(prevProps, prevState)
    {
        this.loadDefinitions();
    }

    render()
    {
        const {createNewWorkflow, ...rest} = this.props;

        return (
            <Modal
                {...rest}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Saved Workflows
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { this.renderDefinitionsTable() }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={createNewWorkflow}>Create New Workflow</Button>
                    <Button onClick={rest.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    private loadDefinitions()
    {
        API.get(`${PUBLIC_URL}/api/definitions`)
            .then(response => {
                if (! response.data.definitions) {
                    this.setState({ definitions: [] });
                }

                this.setState({ definitions: response.data.definitions });
            })
            .catch(error => {
                console.log(error);
            });
    }

    private renderDefinitionsTable()
    {
        if (! this.state.definitions  || this.state.definitions.length === 0) {
            return (
                <p className="text-muted text-center">No form found!</p>
            );
        }

        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.definitions.map((definition: IDefinition) => (
                        <tr id={`definition-${definition._id}`} key={definition._id}>
                            <td>{ definition.name || "Unnamed" }</td>
                            <td width="40%" className="text-center">
                                <Button variant="outline-primary" className="btn-sm m-2"
                                        onClick={() => this.openDefinition(definition._id)}>
                                    <FontAwesomeIcon icon={faFolderOpen}/>&nbsp;Open
                                </Button>
                                <Button variant="outline-primary" className="btn-sm m-2"
                                        onClick={() => this.runDefinition(definition._id)}>
                                    <FontAwesomeIcon icon={faPlayCircle}/>&nbsp;Run
                                </Button>
                                <Button variant="outline-danger" className="btn-sm m-2"
                                        onClick={() => this.deleteDefinition(definition._id)}>
                                    <FontAwesomeIcon icon={faTrash}/>&nbsp;Delete
                                </Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        );
    }

    private openDefinition(definitionId?: string)
    {
        if (! definitionId) {
            return;
        }

        window.location.assign(`${PUBLIC_URL}/${definitionId}`);
    }

    private runDefinition(definitionId?: string)
    {
        if (! definitionId) {
            return;
        }

        window.open(`${PUBLIC_URL}/run/${definitionId}`, "_blank")?.focus();
    }

    private deleteDefinition(definitionId?: string)
    {
        if (! definitionId) {
            return;
        }

        if (! confirm("Are you sure you want to delete this form?")) {
            return;
        }

        API.delete(`${PUBLIC_URL}/api/definition/${definitionId}`)
            .then(response => {
                if (! response.data.success) {
                    return;
                }

                this.setState({
                    definitions: this.state.definitions?.filter((definition: IDefinition) => {
                        return definition._id !== definitionId;
                    })
                });

                let el = document.getElementById(`definition-${definitionId}`);
                if (el) {
                    el.remove();
                }

                let oldDefinition = localStorage.getItem(DEFINITION_KEY)
                    ? JSON.parse(localStorage.getItem(DEFINITION_KEY) || "undefined")
                    : undefined;
                if (oldDefinition && oldDefinition._id === definitionId) {
                    localStorage.removeItem(DEFINITION_KEY);

                    window.location.assign(PUBLIC_URL);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default DefinitionsModal;