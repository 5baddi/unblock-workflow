import * as React from "react";
import { Button, Modal } from "react-bootstrap";
import { IDefinition, IEditorDefinitionsModalProps, IEditorDefinitionsModalState } from "../../interfaces";
import API from "../../api";
import { PUBLIC_URL } from "../../../../src/settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faTrash, faPlayCircle, faTrashAlt, faUpload } from '@fortawesome/free-solid-svg-icons';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import PulseLoader from "react-spinners/PulseLoader";

class DefinitionsModal extends React.Component<IEditorDefinitionsModalProps, IEditorDefinitionsModalState>
{
    constructor(props)
    {
        super(props);

        this.state = {
            definitions: [],
            isLoading: true,
            selectionModel: []
        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevProps.show !== this.props.show && this.props.show === true) {
            this.loadDefinitions();
        }
    }

    render()
    {
        const {currentOpenedDefinition, createNewWorkflow, openWorkflow, deleteWorkflow, bulkDeleteWorkflows, bulkExportWorkflows, allowExport, user, ...rest} = this.props;

        return (
            <Modal
                {...rest}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Saved workflows
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { this.renderDefinitionsTable() }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => createNewWorkflow()}>Create New Workflow</Button>
                    { 
                        allowExport 
                        ? (
                            <Button variant="success" 
                                disabled={! this.state.selectionModel || this.state.selectionModel.length === 0}
                                onClick={() => this.bulkExportWorkflows()}>
                                <FontAwesomeIcon icon={faUpload}/>&nbsp;Bulk Export
                            </Button>
                        )
                        : (undefined)
                    }
                    <Button variant="danger" 
                        disabled={! this.state.selectionModel || this.state.selectionModel.length === 0}
                        onClick={() => this.bulkDeleteWorkflows()}>
                        <FontAwesomeIcon icon={faTrashAlt}/>&nbsp;Bulk Delete
                    </Button>
                    <Button onClick={rest.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    private loadDefinitions()
    {
        this.setState({ isLoading: true });

        let endpoint = `${PUBLIC_URL}/api/definitions`;
    
        if (typeof this.props.user?.tenantId === "string" && typeof this.props.user?.Id === "string") {
            endpoint = endpoint.concat(`/${this.props.user?.tenantId}/${this.props.user?.Id}`);
        }
console.log(endpoint);
        API.get(endpoint)
            .then(response => {
                if (! response.data.definitions) {
                    this.setState({ definitions: [], isLoading: false });
                }

                let definitions = response.data.definitions;

                // Filter forms and ignore current opened
                // if (typeof this.props.currentOpenedDefinition === "string") {
                //     definitions = Object.values(definitions).filter((value) => {
                //         let definition = Object.assign({} as IDefinition, JSON.parse(JSON.stringify(value)));

                //         return definition._id !== this.props.currentOpenedDefinition;
                //     });
                // }

                this.setState({ definitions, isLoading: false });
            })
            .catch(error => {
                console.log(error);

                this.setState({ isLoading: false  });
            });
    }

    private renderDefinitionsTable()
    {
        if (! this.props.show) {
            return undefined;
        }
        
        if (this.state.isLoading) {
            return (
                <div className="text-center">
                    <PulseLoader color="rgba(44,64,90,0.8)" size={15} margin={12}/>
                </div>
            );
        }
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
                            <Button disabled={typeof this.props.currentOpenedDefinition === "string" && this.props.currentOpenedDefinition === cellValues.row._id} 
                                    variant="outline-primary" className="btn-sm mr-2"
                                    onClick={() => this.openWorkflow(cellValues.row._id)}>
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
            <div style={{display: "table", tableLayout: "fixed", width: "100%", height: 300}}>
                <DataGrid
                    rows={this.state.definitions}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    getRowId={(row) => row._id }
                    disableSelectionOnClick
                    checkboxSelection
                    onSelectionModelChange={(newSelectionModel) => {
                        this.setSelectionModel(newSelectionModel);
                    }}
                    selectionModel={this.state.selectionModel}
                />
            </div>
        );
    }

    private setSelectionModel(newSelectionModel) 
    {
        this.setState({
            selectionModel: newSelectionModel
        });
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
        this.setState({ isLoading: true });

        this.props
            .deleteWorkflow(definitionId)
            .then((result) => {
                if (! result) {
                    this.setState({ isLoading: false });

                    return;
                }

                this.loadDefinitions();
            });
    }

    private bulkDeleteWorkflows()
    {
        this.setState({ isLoading: true });

        this.props
            .bulkDeleteWorkflows(this.state.selectionModel)
            .then((result) => {
                if (! result) {
                    this.setState({ isLoading: false });

                    return;
                }

                this.setState({ selectionModel: [] });
                this.loadDefinitions();
            });
    }
    
    private bulkExportWorkflows()
    {
        if (! this.props.allowExport) {
            return;
        }
        
        this.setState({ isLoading: true });
        
        this.props
            .bulkExportWorkflows(this.state.selectionModel)
            .then((result) => {
                if (! result) {
                    this.setState({ isLoading: false });

                    return;
                }

                this.setState({ selectionModel: [], isLoading: false });
            })
            .catch(error => this.setState({ isLoading: false }));
    }

    private openWorkflow(definitionId: string)
    {
        this.props.openWorkflow(definitionId);
    }
}

export default DefinitionsModal;