import * as React from "react";
import { Button, Modal, Table, ButtonGroup } from "react-bootstrap";
import { IDefinition, IEditorDefinitionsModalProps, IEditorDefinitionsModalState } from "../../interfaces";
import API from "../../api";
import { PUBLIC_URL } from "../../../../src/settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faTrash, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { DataGrid, GridColDef, useGridApiRef, GridApiRef } from "@mui/x-data-grid";

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
        this.openWorkflow = this.openWorkflow.bind(this);
        this.deleteWorkflow = this.deleteWorkflow.bind(this);
    }

    componentDidMount()
    {
        this.loadDefinitions();
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevProps.show !== this.props.show) {
            this.loadDefinitions();
        }
    }

    render()
    {
        const {createNewWorkflow, openWorkflow, deleteWorkflow, ...rest} = this.props;

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
                <p className="text-muted text-center">No workflow found!</p>
            );
        }

        let columns: GridColDef[] = [
            {
                field: "name",
                headerName: "Name",
                description: "Workflow name",
                sortable: true,
                flex: 3,
                minWidth: 500,
                valueGetter: params => `${params.row.name || "Unnamed"}`
            },
            {
                field: "_id",
                headerName: "Actions",
                sortable: false,
                flex: 1.5,
                minWidth: 200,
                cellClassName: "text-center",
                renderCell: (cellValues) => {
                    return (
                        <div>
                            <Button variant="outline-primary" className="btn-sm mr-2"
                                    onClick={() => this.openWorkflow(cellValues.row)}>
                                <FontAwesomeIcon icon={faFolderOpen}/>&nbsp;Open
                            </Button>
                            <Button variant="outline-primary" className="btn-sm mr-2"
                                    onClick={() => this.runDefinition(cellValues.row._id)}>
                                <FontAwesomeIcon icon={faPlayCircle}/>&nbsp;Run
                            </Button>
                            <Button variant="outline-danger" className="btn-sm"
                                    onClick={() => this.deleteWorkflow(cellValues.row._id)}>
                                <FontAwesomeIcon icon={faTrash}/>&nbsp;Delete
                            </Button>
                        </div>
                    );
                }
            },
        ];

        return (
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid
                    rows={this.state.definitions}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    getRowId={(row) => row._id }
                />
            </div>
        );
    }

    private runDefinition(definitionId?: string)
    {
        if (! definitionId) {
            return;
        }

        window.open(`${PUBLIC_URL}/run/${definitionId}`, "_blank")?.focus();
    }

    private deleteWorkflow(definitionId: string)
    {
        this.props
            .deleteWorkflow(definitionId)
            .then(() => this.loadDefinitions());
    }

    private openWorkflow(definition: IDefinition)
    {
        this.props.openWorkflow(definition);
    }
}

export default DefinitionsModal;