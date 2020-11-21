import React from 'react';
import {Grid, Icon, TextField, makeStyles, MenuItem, Button} from "@material-ui/core";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import "yup-phone";
import {Formik} from 'formik';
import axios from 'axios';
//import { useHistory } from "react-router-dom";


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

const civilityOptions = [
    {
        value: 'Mr',
    },
    {
        value: 'Mrs',
    },
    {
        value: 'Ms',
    },
    {
        value: 'Miss',
    },
];

const sexeOptions = [
    {
        value: 'Male',
    },
    {
        value: 'Female',
    },
];

export default function ClientForm(){

    const classes = useStyle();
    //const history = useHistory(); // history.push('/example');

    const notify = (firstName, lastName) => toast.success(`The client ${firstName} ${lastName} has been successfully added !`);

    const CreateClient = async (values) =>{
        //e.preventDefault(); //
       await axios.post( "http://localhost:51915/immopark/api/client/", values)
            .then(response => (console.log(response)))
            .then(() => notify(values.firstName,values.lastName))
            //.then(() => window.location.href = '/addproperty')
            .catch(error => (console.log(error)));
    }

    //const phoneReg = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const SignupSchema = Yup.object().shape({

        civility: Yup
            .string()
            .required('Required'),
        sexe: Yup
            .string()
            .required('Required'),
        lastName: Yup
            .string()
            .required('Required'),
        firstName: Yup
            .string()
            .required('Required'),
        address: Yup
            .string()
            .required('Required'),
        postCode: Yup
            .string()
            .required('Required'),
        town: Yup
            .string()
            .required('Required'),
        country: Yup
            .string()
            .required('Required'),
        birthDay: Yup
            .string()
            .required('Required'),
        age: Yup
            .number()
            .required('Required'),
        birthPlace: Yup
            .string()
            .required('Required'),
        email: Yup
            .string()
            .email("Please enter valid email")
            .required('Required'),
        gsm: Yup
            .string()
            .phone("BE")
            .required('Required'),
    });

    return (
        <div>
            <Formik
                initialValues={{
                    civility:'Mr',
                    sexe:'Male',
                    lastName:'Smith',
                    firstName: 'John',
                    address: 'Manatthan',
                    postCode: '1070',
                    town: 'New York',
                    country: 'USA',
                    birthDay: '30/10/1985',
                    age: 20,
                    birthPlace: 'Los Angeles',
                    email: 'john.smith@mail.com',
                    gsm: '0475203040'
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    //console.log(propertyValues);
                    console.log(values);
                    CreateClient(values);
                }}
            >
                {props => (

                    <form className={classes.root} onSubmit={props.handleSubmit}>
                        <Grid container>
                            <Grid item xs={6}>


                                <TextField
                                    select
                                    type="text"
                                    name="civility"
                                    label="Civility"
                                    value={props.values.civility}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    variant="outlined"
                                    error={props.errors.civility}
                                    helperText={props.errors.civility}
                                >
                                    {civilityOptions.map((civility) => (
                                        <MenuItem key={civility.value} value={civility.value}>
                                            {civility.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    select
                                    type="text"
                                    name="sexe"
                                    label="Sexe"
                                    value={props.values.sexe}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    variant="outlined"
                                    error={props.errors.sexe}
                                    helperText={props.errors.sexe}
                                >
                                    {sexeOptions.map((sexe) => (
                                        <MenuItem key={sexe.value} value={sexe.value}>
                                            {sexe.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    name="lastName"
                                    label="LastName"
                                    value={props.values.lastName}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    error={props.errors.lastName}
                                    helperText={props.errors.lastName}
                                />
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    name="firstName"
                                    label="FirstName"
                                    value={props.values.firstName}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    error={props.errors.firstName}
                                    helperText={props.errors.firstName}
                                />
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    name="address"
                                    label="Address"
                                    value={props.values.address}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    error={props.errors.address}
                                    helperText={props.errors.address}
                                />
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    name="postCode"
                                    label="PostCode"
                                    value={props.values.postCode}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    error={props.errors.postCode}
                                    helperText={props.errors.postCode}
                                />

                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    name="town"
                                    label="Town"
                                    value={props.values.town}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    error={props.errors.town}
                                    helperText={props.errors.town}
                                />
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    name="country"
                                    label="Country"
                                    value={props.values.country}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    error={props.errors.country}
                                    helperText={props.errors.country}
                                />
                                <TextField
                                    type="date"
                                    name="birthDay"
                                    label="BirthDay"
                                    value={props.values.birthDay}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    variant="outlined"
                                    error={props.errors.birthDay}
                                    helperText={props.errors.birthDay}
                                />
                                <TextField
                                    type="number"
                                    name="age"
                                    label="Age"
                                    value={props.values.age}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    InputProps={{ inputProps: { min: 18 } }}
                                    variant="outlined"
                                    error={props.errors.age}
                                    helperText={props.errors.age}
                                />
                                <TextField
                                    type="text"
                                    name="birthPlace"
                                    label="BirthPlace"
                                    value={props.values.birthPlace}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    variant="outlined"
                                    error={props.errors.birthPlace}
                                    helperText={props.errors.birthPlace}
                                />
                                <TextField
                                    type="text"
                                    name="email"
                                    label="Email"
                                    value={props.values.email}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    variant="outlined"
                                    error={props.errors.email}
                                    helperText={props.errors.email}
                                />
                                <TextField
                                    type="number"
                                    name="gsm"
                                    label="Phone Number"
                                    value={props.values.gsm}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    variant="outlined"
                                    error={props.errors.gsm}
                                    helperText={props.errors.gsm}
                                />
                            </Grid>
                            <br/>
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