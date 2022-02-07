import * as React from 'react';
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import { TextField } from "@material-ui/core";
import { IHeaderProps, IHeaderState } from "../../interfaces";
import { loadDefaultDefinition } from "../../helpers";
import { ENV } from "../../../../src/settings";
import { DEFINITION_KEY } from "../../global";
import { FiSliders, FiShare2, FiShare, FiDownload } from "react-icons/fi";
import { HeaderButton } from "./button";

import "./style.scss";

class Header extends React.Component<IHeaderProps, IHeaderState>
{
    constructor(props)
    {
        super(props);

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
                            value={this.props.definition.name || "Unnamed"}
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

    private onChange(e)
    {
        if (ENV === "development") {
            console.log("updating form name");
        }

        this.props.definition.name = e.target.value;

        localStorage.setItem(DEFINITION_KEY, JSON.stringify(this.props.definition));

        this.setState({ definition: this.props.definition });

        // TODO: save form definition on DB
    }
}

const mapStateToProps = (state) => ({
    definition: state.definition
});

export default connect(mapStateToProps)(Header);