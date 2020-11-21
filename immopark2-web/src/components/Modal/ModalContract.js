import React from 'react';
import {Formik} from 'formik';
import {Grid, TextField, makeStyles, Paper, MenuItem, Button, Icon, InputAdornment} from "@material-ui/core";
import Modal from 'react-awesome-modal';
import * as Yup from 'yup';
import "yup-phone";
import {useHistory} from "react-router-dom";
import axios from "axios";
import './ModalComponent.css';

const useStyle = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    },
    button: {
        margin: theme.spacing(1),
    },
}))

const booleanOptions = [
    {
        value: "true",
    },
    {
        value: "false",
    },
];

export const ModalContract = props => {
    const {contractValues, setModalIsOpen, modalIsOpen} = props;
    const classes = useStyle();
    const history = useHistory(); // history.push('/example');

    const UpdateContract = async (values) =>{
        await axios.put( `http://localhost:51915/immopark/api/contract/${contractValues.id}`, values)
            .then(response => (console.log(response)))
            .then(() => history.push( '/contract'))
            //.then(() => window.location.href = '/allproperties')
            .catch(error => (console.log(error)));
    }


    const SignupSchema = Yup.object().shape({
        startDate: Yup
            .string()
            .required('Required'),
        endDate: Yup
            .string()
            .required('Required'),
        duration: Yup
            .number()
            .required('Required'),
        indexBase: Yup
            .string()
            .required('Required'),
        amountGarantee: Yup
            .number()
            .required('Required'),
        signatureDate: Yup
            .string()
            .required('Required'),
        indexEntryWater: Yup
            .number()
            .required('Required'),
        indexEntryGaz: Yup
            .number()
            .required('Required'),
        indexEntryElectricity: Yup
            .number()
            .required('Required'),
        cautionPaid: Yup
            .string()
            .required('Required'),
        paymentCautionDate: Yup
            .string()
            .required('Required'),
        isFirstMonthPaid: Yup
            .string()
            .required('Required'),
        entryDate: Yup
            .string()
            .required('Required'),
        outDate: Yup
            .string()
            .required('Required'),
        indexOutWater: Yup
            .number()
            .required('Required'),
        indexOutGaz: Yup
            .number()
            .required('Required'),
        indexOutElectricity: Yup
            .number()
            .required('Required'),
    });

    return (

        <Modal
            visible={modalIsOpen}
            effect="fadeInUp"
            onClickAway={() => setModalIsOpen(false)}
        >
            <Paper className={"modal"}>

                <Formik
                    initialValues={{
                        startDate: '01/01/2021',
                        endDate: '01/01/2024',
                        duration: 36,
                        indexBase: '23',
                        amountGarantee: 1400,
                        signatureDate: '01/12/2020',
                        indexEntryWater: 20,
                        indexEntryGaz: 25,
                        indexEntryElectricity: 30,
                        cautionPaid: false,
                        paymentCautionDate: 1500,
                        isFirstMonthPaid: false,
                        entryDate: '01/01/2021',
                        outDate: '01/01/2021',
                        indexOutWater: 20,
                        indexOutGaz: 25,
                        indexOutElectricity: 30,
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        console.log(contractValues.id);
                        console.log(values);
                        UpdateContract(values);
                    }}
                >
                    {props => (

                        <form className={classes.root} onSubmit={props.handleSubmit}>
                            <Grid container>
                                <Grid item xs={12} alignItems={"center"}>
                                    <div >
                                        <h1 className={"title"} > Update infos of Contract n°{contractValues.id}</h1>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        type="date"
                                        name="startDate"
                                        label="Start Date"
                                        value={props.values.startDate}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        variant="outlined"
                                        error={props.errors.startDate}
                                        helperText={props.errors.startDate}
                                    />
                                    <TextField
                                        type="date"
                                        name="endDate"
                                        label="End Date"
                                        value={props.values.endDate}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        variant="outlined"
                                        error={props.errors.endDate}
                                        helperText={props.errors.endDate}
                                    />
                                    <TextField
                                        type="number"
                                        name="duration"
                                        label="Duration"
                                        value={props.values.duration}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">Month</InputAdornment>,
                                            inputProps: { min: 0 }
                                        }}
                                        variant="outlined"
                                        error={props.errors.duration}
                                        helperText={props.errors.duration}
                                    />
                                    <TextField
                                        type="text"
                                        name="indexBase"
                                        label="indexBase"
                                        value={props.values.indexBase}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        variant="outlined"
                                        error={props.errors.indexBase}
                                        helperText={props.errors.indexBase}
                                    />
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        name="amountGarantee"
                                        label="Amount Garantee"
                                        value={props.values.amountGarantee}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">€</InputAdornment>,
                                            inputProps: { min: 0 }
                                        }}
                                        error={props.errors.amountGarantee}
                                        helperText={props.errors.amountGarantee}
                                    />

                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        variant="outlined"
                                        type="date"
                                        name="signatureDate"
                                        label="Signature Date"
                                        value={props.values.signatureDate}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        error={props.errors.signatureDate}
                                        helperText={props.errors.signatureDate}
                                    />
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        name="indexEntryWater"
                                        label="IndexEntry Water"
                                        value={props.values.indexEntryWater}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">M³</InputAdornment>,
                                            inputProps: { min: 0 }
                                        }}
                                        error={props.errors.indexEntryWater}
                                        helperText={props.errors.indexEntryWater}
                                    />
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        name="indexEntryGaz"
                                        label="IndexEntry Gaz"
                                        value={props.values.indexEntryGaz}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">M³</InputAdornment>,
                                            inputProps: { min: 0 }
                                        }}
                                        error={props.errors.indexEntryGaz}
                                        helperText={props.errors.indexEntryGaz}
                                    />
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        name="indexEntryElectricity"
                                        label="IndexEntry Electricity"
                                        value={props.values.indexEntryElectricity}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">kWh</InputAdornment>,
                                            inputProps: { min: 0 }
                                        }}
                                        error={props.errors.indexEntryElectricity}
                                        helperText={props.errors.indexEntryElectricity}
                                    />


                                </Grid>
                                <Grid item xs={3}>
                                    <TextField

                                        variant="outlined"
                                        type="text"
                                        name="cautionPaid"
                                        label="IsCautionPaid"
                                        value={props.values.cautionPaid}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        error={props.errors.cautionPaid}
                                        helperText={props.errors.cautionPaid}
                                    >
                                        {booleanOptions.map((boolean) => (
                                            <MenuItem key={boolean.value} value={boolean.value}>
                                                {boolean.value}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        variant="outlined"
                                        type="date"
                                        name="paymentCautionDate"
                                        label="paymentCaution Date"
                                        value={props.values.paymentCautionDate}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        error={props.errors.paymentCautionDate}
                                        helperText={props.errors.paymentCautionDate}
                                    />
                                    <TextField

                                        variant="outlined"
                                        type="text"
                                        name="isFirstMonthPaid"
                                        label="isFirstMonthPaid"
                                        value={props.values.isFirstMonthPaid}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        error={props.errors.isFirstMonthPaid}
                                        helperText={props.errors.isFirstMonthPaid}
                                    >
                                        {booleanOptions.map((boolean) => (
                                            <MenuItem key={boolean.value} value={boolean.value}>
                                                {boolean.value}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        type="date"
                                        name="entryDate"
                                        label="Entry Date"
                                        value={props.values.entryDate}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        variant="outlined"
                                        error={props.errors.entryDate}
                                        helperText={props.errors.entryDate}
                                    />

                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        type="date"
                                        name="outDate"
                                        label="Out Date"
                                        value={props.values.outDate}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        variant="outlined"
                                        error={props.errors.outDate}
                                        helperText={props.errors.outDate}
                                    />
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        name="indexOutWater"
                                        label="IndexOut Water"
                                        value={props.values.indexOutWater}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">M³</InputAdornment>,
                                            inputProps: { min: 0 }
                                        }}
                                        error={props.errors.indexOutWater}
                                        helperText={props.errors.indexOutWater}
                                    />
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        name="indexOutGaz"
                                        label="IndexOut Gaz"
                                        value={props.values.indexOutGaz}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">M³</InputAdornment>,
                                            inputProps: { min: 0 }
                                        }}
                                        error={props.errors.indexOutGaz}
                                        helperText={props.errors.indexOutGaz}
                                    />
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        name="indexOutElectricity"
                                        label="IndexOut Electricity"
                                        value={props.values.indexOutElectricity}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">kWh</InputAdornment>,
                                            inputProps: { min: 0 }
                                        }}
                                        error={props.errors.indexOutElectricity}
                                        helperText={props.errors.indexOutElectricity}
                                    />
                                </Grid>
                                <Grid container alignItems="flex-end" justify="center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        endIcon={<Icon>send</Icon>}
                                        type='submit'
                                        disabled={!props.isValid}
                                    >
                                        VALIDATION
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