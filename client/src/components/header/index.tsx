import * as React from 'react';
import { connect } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { IDefinition, IHeaderProps, IHeaderState } from "../../interfaces";
import { loadDefaultDefinition } from "../../helpers";
import { FiSliders, FiShare2, FiShare, FiDownload } from "react-icons/fi";
import { HeaderButton } from "./button";

import "./style.scss";

class Header extends React.Component<IHeaderProps, IHeaderState>
{
    readonly definition: IDefinition;

    constructor(props)
    {
        super(props);

        this.definition = loadDefaultDefinition();
    }

    render()
    {
        return (
            <Grid container className="header">
                <Grid item md={7} container justifyContent="start" alignItems="center">
                    <Grid item md={4}>
                        <Typography padding={2}>{this.definition.name || "Unnamed"}</Typography>
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
}

const mapStateToProps = (state) => ({
    definition: state.definition || loadDefaultDefinition()
});

export default connect(mapStateToProps)(Header);