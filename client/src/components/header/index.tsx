import * as React from 'react';
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import { TextField } from "@material-ui/core";
import { IHeaderProps, IHeaderState } from "../../interfaces";
import { loadDefaultDefinition } from "../../helpers";
import { ENV, PUBLIC_URL } from "../../../../src/settings";
import {DEFINITION_KEY, DEFINITION_NAME_KEY, DEFINITION_ID_KEY } from "../../global";
import { FiSliders, FiShare2, FiShare, FiDownload } from "react-icons/fi";
import { HeaderButton } from "./button";
import API  from "../../api";

import "./style.scss";

class Header extends React.Component<IHeaderProps, IHeaderState>
{
    constructor(props)
    {
        super(props);

        this.state = {
            name:  "Unnamed"
        };

        this.onChange = this.onChange.bind(this);
    }

    render()
    {
        return (
            <Grid container className="header">
                <Grid item md={7} container justifyContent="start" alignItems="center">
                    <Grid item md={4}>
                        <TextField
                            variant="standard"
                            defaultValue={this.state.name || "Unnamed"}
                            onChange={this.onChange}
                        />
                    </Grid>
                </Grid>
                <Grid item md={5} container justifyContent="end" alignItems="center" className="header-actions">
                    {/*<HeaderButton label="Customize" hoverClassName="blue" children={<FiSliders/>}/>*/}
                    {/*<HeaderButton label="Share" hoverClassName="yellow" children={<FiShare/>}/>*/}
                    {/*<HeaderButton label="Automate" hoverClassName="green" children={<FiShare2/>}/>*/}
                    {/*<HeaderButton label="Results" hoverClassName="pink" children={<FiDownload/>}/>*/}
                </Grid>
            </Grid>
        )
    }

    private async onChange(e)
    {
        if (ENV === "development") {
            console.log("updating form name");
        }

        let name = e.target.value;
        let oldName = localStorage.getItem(DEFINITION_NAME_KEY);

        if (name === oldName) {
            return;
        }

        localStorage.setItem(DEFINITION_NAME_KEY, name);

        let id = localStorage.getItem(DEFINITION_ID_KEY);
        
        if (! id) {
            return;
        }

        await API.put(`${PUBLIC_URL}/definition/${id}`, { name })
            .then(response => {
                if (! response.data.definition) {
                    return;
                }

                localStorage.setItem(DEFINITION_NAME_KEY, response.data.definition.name);

                this.setState({ name: response.data.name });
            })
            .catch(error => {
                console.log(error);
            });
    }
}

const mapStateToProps = (state) => ({
    name: state.name
});

export default connect(mapStateToProps)(Header);