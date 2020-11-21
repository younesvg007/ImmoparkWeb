import React from 'react';
import PropertyForm from "./PropertyForm";
import {Paper, makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function AddProperty(){

    const classes = useStyles();

    return(
        <>
            <div>
                <h1 className="addproperty">Add Property</h1>
            </div>
            <Paper className={classes.pageContent} >
                <PropertyForm className='addproperty'/>
            </Paper>
        </>
    );
}