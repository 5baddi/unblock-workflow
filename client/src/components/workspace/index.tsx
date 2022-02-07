import * as React from "react";
import { Box, Grid, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { Delete as DeleteIcon } from "@mui/icons-material";
import { IDefinition } from "../../interfaces";
import API from "../../api";
import { FiFileText } from "react-icons/fi";

import "./style.scss";

class Workspace extends React.Component<{}, { definitions: [] }>
{
    constructor(props)
    {
        super(props);

        this.state = {
            definitions: [],
        };
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
                        {
                            this.state.definitions.length > 0 ? <List>
                                {
                                    this.state.definitions.map((definition: IDefinition) =>  (
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            }
                                        >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <FiFileText />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={definition.name}
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

    private loadDefinitions()
    {
        API.get("/definitions")
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
}

export default Workspace;