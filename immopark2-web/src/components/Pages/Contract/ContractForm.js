import React, {useEffect, useState} from 'react';
import {Grid, Icon, TextField, makeStyles, MenuItem, Button, InputAdornment} from "@material-ui/core";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import "yup-phone";
import {Formik} from 'formik';
import axios from 'axios';
import { useHistory } from "react-router-dom";


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

export default function ClientForm(){

    const classes = useStyle();
    const [clients, setClients] = useState([]);
    const [properties, setProperties] = useState([]);
    const history = useHistory(); // history.push('/example');

    const notify = () => toast.success(`A New Contract has been successfully added !`);

    const CreateContract = async (values) =>{
        //e.preventDefault(); //
        //await axios.post( "http://localhost:51915/immopark/api/contract/", values)
        await axios.post( "http://localhost:5000/immopark/api/contract/", values)
            .then(response => (console.log(response)))
            .then(() => notify())
            .then(() => window.location.href = '/allcontracts')
            //.then(() => history.push('/allcontracts'))
            .catch(error => (console.log(error)));
    }
    //const phoneReg = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const getClients = async () =>{
        //await axios.get(`http://localhost:51915/immopark/api/client`)
        await axios.get(`http://localhost:5000/immopark/api/client`)
            .then(data => setClients(data.data)) //then => ca renvoi une promesse: renvoi des donnes qui nexise pas sur front end que tu va receptionner grace a api et que tu peux lleur attribuer un comportement
            .catch(error => (console.log(error)));

    }

    const getProperties = async () =>{
        //await axios.get(`http://localhost:51915/immopark/api/property`)
        await axios.get(`http://localhost:5000/immopark/api/property`)
            .then(data => setProperties(data.data)) //then => ca renvoi une promesse: renvoi des donnes qui nexise pas sur front end que tu va receptionner grace a api et que tu peux lleur attribuer un comportement
            .catch(error => (console.log(error)));
    }

    useEffect(() => {
        getProperties();
        getClients();
    }, [])

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
        idProperty: Yup
            .number()
            .required('Required'),
        idClient: Yup
            .number()
            .required('Required'),
    });

    return (
        <div>
            <Formik
                initialValues={{
                    startDate: '01/02/2021',
                    endDate: '01/02/2024',
                    duration: 36,
                    indexBase: '23',
                    amountGarantee: 1400,
                    signatureDate: '01/01/2021',
                    indexEntryWater: 20,
                    indexEntryGaz: 25,
                    indexEntryElectricity: 30,
                    cautionPaid: false,
                    paymentCautionDate: '15/01/2021',
                    isFirstMonthPaid: false,
                    entryDate: '31/01/2021',
                    outDate: '31/01/2024',
                    indexOutWater: 30,
                    indexOutGaz: 35,
                    indexOutElectricity: 40,
                    idProperty: '',
                    idClient: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    //console.log(propertyValues);
                    console.log(values);
                    CreateContract(values);
                }}
            >
                {props => (

                    <form className={classes.root} onSubmit={props.handleSubmit}>
                        <Grid container>
                            <Grid item xs={6}>
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
                                        endAdornment: <InputAdornment position="end">Months</InputAdornment>,
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
                                <TextField
                                    select
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

                            </Grid>
                            <Grid item xs={6}>

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
                                    select
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
                                <TextField
                                    select
                                    variant="outlined"
                                    type="number"
                                    name="idProperty"
                                    label="idProperty"
                                    value={props.values.idProperty}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    InputProps={{ inputProps: { min: 0 } }}
                                    error={props.errors.idProperty}
                                    helperText={props.errors.idProperty}
                                >
                                    {properties.map((property, index) => (
                                        <MenuItem key={index} value={property.id}>
                                            {property.id}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    select
                                    variant="outlined"
                                    type="number"
                                    name="idClient"
                                    label="idClient"
                                    value={props.values.idClient}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    error={props.errors.idClient}
                                    helperText={props.errors.idClient}
                                >
                                {clients.map((client, index) => (
                                    !client.isRenter ? <MenuItem key={index} value={client.natRegister}>{client.natRegister}</MenuItem> : ""
                                ))}
                                </TextField>
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
            <ToastContainer />
        </div>
    )
}