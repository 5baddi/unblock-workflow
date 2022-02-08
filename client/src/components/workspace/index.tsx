import * as React from "react";
import {
    Box,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    ListItemButton,
    Button
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { Delete as DeleteIcon } from "@mui/icons-material";
import { IDefinition } from "../../interfaces";
import API from "../../api";
import { FiFileText } from "react-icons/fi";
import EditIcon from '@mui/icons-material/Edit';

import "./style.scss";
import {DEFINITION_ID_KEY, DEFINITION_NAME_KEY, USER_ID_KEY} from "../../global";
import {PUBLIC_URL} from "../../settings";
import {TextField} from "@material-ui/core";

class Workspace extends React.Component<{}, { definitions: [] }>
{
    constructor(props)
    {
        super(props);

        this.state = {
            definitions: [],
        };

        this.deleteDefinition = this.deleteDefinition.bind(this);
        this.updateDefinitionName = this.updateDefinitionName.bind(this);
    }

    componentDidMount()
    {
        this.loadDefinitions();
    }

    render()
    {
        return (
            <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Forms list
                        </Typography>
                        <Button variant="contained" onClick={this.openNew}>Create new form</Button>
                        {
                            this.state.definitions.length > 0 ? <List>
                                {
                                    this.state.definitions.map((definition: IDefinition) =>  (
                                        <ListItem key={definition._id}
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete" onClick={() => this.deleteDefinition(definition._id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            }
                                        >
                                            <ListItemButton>
                                                <IconButton edge="end" aria-label="delete" onClick={() => this.editDefinition(definition._id)}>
                                                    <EditIcon />
                                                </IconButton>
                                            </ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <FiFileText />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <TextField
                                                variant="standard"
                                                defaultValue={definition.name}
                                                onBlur={(e) => this.updateDefinitionName(e, definition)}
                                                onChange={() => {}}
                                            />
                                        </ListItem>
                                    ))
                                }
                            </List>
                            : 
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                No form found
                            </Typography>
                        }
                    </Grid>
                </Grid>
            </Box>
        );
    }

    private openNew()
    {
        window.location.assign(`${PUBLIC_URL}/new`);
    }

    private loadDefinitions()
    {
        API.get(`${PUBLIC_URL}/api/definitions`)
            .then(response => {
                if (! response.data.definitions) {
                    return;
                }

                this.setState({
                    definitions: response.data.definitions
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    private editDefinition(definitionId)
    {
        window.location.assign(`${PUBLIC_URL}/edit/${definitionId}`);
   }

    private async updateDefinitionName(e, definition)
    {
        let name = e.target.value;
        definition.name = name;

        await API.post(`${PUBLIC_URL}/api/definition`, { definition })
            .catch(error => {
                console.log(error);
            });
    }

    private async deleteDefinition(definitionId)
    {
        if (! confirm("Are you sure you want to delete this form?")) {
            return;
        }

        API.delete(`${PUBLIC_URL}/api/definition/${definitionId}`)
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default Workspace;