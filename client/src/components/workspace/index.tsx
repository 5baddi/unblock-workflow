import * as React from "react";
import { Box, Grid, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { Delete as DeleteIcon, Folder as FolderIcon } from "@mui/icons-material";
import { IDefinition } from "../../interfaces";
import API from "../../api";

import "./style.scss";

class Workspace extends React.Component
{
    private definitions?: IDefinition[];

    constructor(props)
    {
        super(props);

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
                            this.definitions ? <List>
                                {
                                    this.definitions.map(definition => {
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            }
                                        >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <FolderIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={definition.name}
                                            />
                                        </ListItem>
                                    })
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

                this.definitions = response.data.definitions;
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default Workspace;