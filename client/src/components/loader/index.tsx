import * as React from "react";
import { Grid } from "@mui/material";
import PulseLoader from "react-spinners/PulseLoader";

import "./style.scss";

class Loader extends React.Component<{ isLoading?: boolean, mode?: "inline" | "page" }>
{
    render() 
    {
        if (! this.props.isLoading) {
            return (<div></div>);
        }

        return (
            <Grid item md={12} id="editor-loader" className={this.props.mode === "inline" ? "inline-mode" : ""}>
                <PulseLoader color="rgba(44, 64, 90, 0.8)" size={15} margin={12}/>
            </Grid>
        );
    }
}

export default Loader;