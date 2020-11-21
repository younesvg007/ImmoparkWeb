import React from 'react';
import {makeStyles, Paper} from "@material-ui/core";
import ClientForms from "../Client/ClientForms";


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function AddClient(){

    const classes = useStyles();

    return(
        <>
            <div>
                <h1 className='addclient'>Add Client</h1>
            </div>
            <Paper className={classes.pageContent} >
                <ClientForms className='addclient'/>
            </Paper>
        </>
    );
}