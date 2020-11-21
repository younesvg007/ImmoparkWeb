import React from 'react';
import {Formik} from 'formik';
import {Grid, makeStyles, Paper, Button, FormControl, FormGroup, FormControlLabel, Checkbox} from "@material-ui/core";
import Modal from 'react-awesome-modal';
import * as Yup from 'yup';
import {useHistory} from "react-router-dom";
//import axios from "axios";
import './ModalComponent.css';


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

    const SignupSchema = Yup.object().shape({

    });

    return (

        <Modal
            visible={modalDocIsOpen}
            effect="fadeInUp"
            onClickAway={() => setModalDocIsOpen(false)}
        >
            <Paper className={"modal-doc"}>

                <Formik
                    initialValues={{
                        checked: [],
                    }}
                    //validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {props => (

                        <form className={classes.root} onSubmit={props.handleSubmit}>
                            <Grid container>
                                <Grid item xs={12} alignItems={"center"}>
                                    <div >
                                        <h1 className={"title"} > Check Documents that you need</h1>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox onChange={props.handleChange} name="leaseContract" />}
                                                label="Lease contract"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={props.handleChange} name="caution" />}
                                                label="Caution"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={props.handleChange} name="stateEntry" />}
                                                label="State of entry"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={props.handleChange} name="stateExit" />}
                                                label="State of exit "
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={props.handleChange} name="leaseTermination" />}
                                                label="Early termination of lease"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={props.handleChange} name="leaseHoliday" />}
                                                label="Lease holiday"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </Grid>
                                <Grid container alignItems="flex-end" justify="center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        type='submit'
                                        disabled={!props.isValid}
                                    >
                                        Download
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </Paper>

        </Modal>

    )
}