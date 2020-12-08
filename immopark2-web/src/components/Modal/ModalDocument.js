import React from 'react';
import {Formik} from 'formik';
import {Grid, makeStyles, Paper, Button, FormControl, FormGroup, FormControlLabel, Checkbox} from "@material-ui/core";
import Modal from 'react-awesome-modal';
import * as Yup from 'yup';
import {useHistory} from "react-router-dom";
//import axios from "axios";
import './ModalComponent.css';
import axios from "axios";
import download from "downloadjs";


const useStyle = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
            display: 'flex'
        }
    },
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1),
    },
}))

export const ModalDocument = props => {
    const {contractValues, setModalDocIsOpen, modalDocIsOpen} = props;
    const classes = useStyle();
    const history = useHistory(); // history.push('/example');

    const generateLeaseContractWord = async (id) => {
        const fileName = `LeaseContract N°${id}`;
        await axios.get(`http://localhost:5000/immopark/api/contract/wordgenerator/leasecontract/${id}`, {
            responseType: 'blob', // had to add this one here
        })
            .then(response => {
                const content = response.headers['content-type'];
                download(response.data, fileName,content);
                console.log(response);
            })
            //.then(() => notifyDownload(id))
            .catch(error => console.log(error));

    }

    const generateDepositClientWord = async (id) => {
        const fileName = `DepositClient`;
        await axios.get(`http://localhost:5000/immopark/api/contract/wordgenerator/depositclient/${id}`, {
            responseType: 'blob', // had to add this one here
        })
            .then(response => {
                const content = response.headers['content-type'];
                download(response.data, fileName,content);
                console.log(response);
            })
            //.then(() => notifyDownload(id))
            .catch(error => console.log(error));

    }

    const generateStateOfEntryWord = async (id) => {
        const fileName = `StateOfEntry`;
        await axios.get(`http://localhost:5000/immopark/api/contract/wordgenerator/stateofentry/${id}`, {
            responseType: 'blob', // had to add this one here
        })
            .then(response => {
                const content = response.headers['content-type'];
                download(response.data, fileName,content);
                console.log(response);
            })
            //.then(() => notifyDownload(id))
            .catch(error => console.log(error));

    }

    const generateStateOfExitWord = async (id) => {
        const fileName = `StateOfExit`;
        await axios.get(`http://localhost:5000/immopark/api/contract/wordgenerator/stateofexit/${id}`, {
            responseType: 'blob', // had to add this one here
        })
            .then(response => {
                const content = response.headers['content-type'];
                download(response.data, fileName,content);
                console.log(response);
            })
            //.then(() => notifyDownload(id))
            .catch(error => console.log(error));

    }

    const generateEarlyLeaseTerminationWord = async (id) => {
        const fileName = `EarlyLeaseTermination`;
        await axios.get(`http://localhost:5000/immopark/api/contract/wordgenerator/earlyleasetermination/${id}`, {
            responseType: 'blob', // had to add this one here
        })
            .then(response => {
                const content = response.headers['content-type'];
                download(response.data, fileName,content);
                console.log(response);
            })
            //.then(() => notifyDownload(id))
            .catch(error => console.log(error));

    }

    const generateLeaseCongerWord = async (id) => {
        const fileName = `LeaseConger`;
        await axios.get(`http://localhost:5000/immopark/api/contract/wordgenerator/leaseconger/${id}`, {
            responseType: 'blob', // had to add this one here
        })
            .then(response => {
                const content = response.headers['content-type'];
                download(response.data, fileName,content);
                console.log(response);
            })
            //.then(() => notifyDownload(id))
            .catch(error => console.log(error));

    }


    return (

        <Modal
            visible={modalDocIsOpen}
            effect="fadeInUp"
            onClickAway={() => setModalDocIsOpen(false)}
        >
            <Paper className={"modal-doc"}>
                <Grid container spacing={1}>
                    <Grid item xs={12} alignItems={"center"}>
                        <div >
                            <h1 className={"title"} > Click the document contract n°{contractValues.id} for downloading</h1>
                        </div><br/>
                    </Grid>
                    <Grid container alignItems="flex-end" justify="center">
                        <Button
                            onClick={() => generateLeaseContractWord(contractValues.id)}
                            size="medium"
                            color="primary"
                            variant="contained"
                            className={classes.button}>
                            Lease Contract
                        </Button>
                    </Grid>
                    <Grid container alignItems="flex-end" justify="center">
                        <Button
                            onClick={() => generateDepositClientWord(contractValues.id)}
                            size="medium"
                            color="primary"
                            variant="contained"
                            className={classes.button}>
                            Deposit For Client
                        </Button>
                    </Grid>
                    <Grid container alignItems="flex-end" justify="center">
                        <Button
                            onClick={() => generateStateOfEntryWord(contractValues.id)}
                            size="medium"
                            color="primary"
                            variant="contained"
                            className={classes.button}>
                            State of Entry
                        </Button>
                    </Grid>
                    <Grid container alignItems="flex-end" justify="center">
                        <Button
                            onClick={() => generateStateOfExitWord(contractValues.id)}
                            size="medium"
                            color="primary"
                            variant="contained"
                            className={classes.button}>
                            State of Exit
                        </Button>
                    </Grid>
                    <Grid container alignItems="flex-end" justify="center">
                        <Button
                            onClick={() => generateEarlyLeaseTerminationWord(contractValues.id)}
                            size="medium"
                            color="primary"
                            variant="contained"
                            className={classes.button}>
                            Early Lease Termination
                        </Button>
                    </Grid>
                    <Grid container alignItems="flex-end" justify="center">
                        <Button
                            onClick={() => generateLeaseCongerWord(contractValues.id)}
                            size="medium"
                            color="primary"
                            variant="contained"
                            className={classes.button}>
                            Lease Conger
                        </Button>
                    </Grid>
                </Grid><br/>

            </Paper>

        </Modal>

    )
}