import React from 'react';
import {makeStyles, Paper} from "@material-ui/core";
import ContractForm from "../Contract/ContractForm";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))
export default function NewContract(){
    const classes = useStyles();

    return(
        <>
            <div>
                <h1 className='newcontract'>New Contract</h1>
            </div>
            <Paper className={classes.pageContent} >
                <ContractForm className='newcontract'/>
            </Paper>
        </>
    );
}