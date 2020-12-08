import React from 'react';
import {Formik} from 'formik';
import {Grid, TextField, makeStyles, Paper,MenuItem,InputAdornment, Button, Icon} from "@material-ui/core";
import Modal from 'react-awesome-modal';
import * as Yup from 'yup';
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

const typeOptions = [
    {
        value: 'House',
    },
    {
        value: 'Appartement',
    },
    {
        value: 'Room',
    },
];

export const ModalProperty = props => {
    const {propertyValues, setModalIsOpen, modalIsOpen} = props;
    const classes = useStyle();
    const history = useHistory(); // history.push('/example');
    //fontion axios PUT

    const UpdateProperty = async (values) =>{
         //console.log(propertyValues);
        //await axios.put( `http://localhost:51915/immopark/api/property/${propertyValues.id}`, values)
        await axios.put( `http://localhost:5000/immopark/api/property/${propertyValues.id}`, values)
            .then(response => (console.log(response)))
            //.then(() => history.push( '/property'))
            .then(() => window.location.href = '/allproperties')
            .catch(error => (console.log(error)));
    }

    const SignupSchema = Yup.object().shape({
        address: Yup
            .string()
            .required('Required'),
        type: Yup
            .string()
            .required('Required'),
        nbRoom: Yup
            .number()
            .required('Required'),
        areaTotal: Yup
            .number()
            .required('Required'),
        areaRoom: Yup
            .number()
            .required('Required'),
        areaKitchen: Yup
            .number()
            .required('Required'),
        areaLiving: Yup
            .number()
            .required('Required'),
        rentPrice: Yup
            .number()
            .required('Required'),
        taxesPrice: Yup
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
                                    address:'Rue de la loi',
                                    floor:'21',
                                    type:'House',
                                    nbRoom: 4,
                                    areaTotal: 250,
                                    areaRoom: 50,
                                    areaKitchen: 60,
                                    areaLiving: 90,
                                    rentPrice: 2150,
                                    taxesPrice: 200
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={(values) => {
                                    //console.log(propertyValues);
                                    //console.log(values);
                                    UpdateProperty(values);
                                }}
                            >
                                {props => (

                                    <form className={classes.root} onSubmit={props.handleSubmit}>
                                        <Grid container>

                                        <Grid item xs={12} alignItems={"center"}>
                                            <div >
                                                <h1 className={"title"} > Update the property</h1>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                type="text"
                                                name="address"
                                                label={propertyValues.address}
                                                value={props.values.address}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                variant="outlined"
                                                error={props.errors.address}
                                                helperText={props.errors.address}
                                            />
                                            <TextField
                                                type="number"
                                                name="floor"
                                                label={propertyValues.floor}
                                                InputProps={{ inputProps: { min: -1 } }}
                                                value={props.values.floor}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                variant="outlined"
                                            />
                                            <TextField
                                                variant="outlined"
                                                type="text"
                                                name="type"
                                                label={propertyValues.type}
                                                value={props.values.type}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                error={props.errors.type}
                                                helperText={props.errors.type}
                                            >
                                                {typeOptions.map((type) => (
                                                    <MenuItem key={type.value} value={type.value}>
                                                        {type.value}
                                                    </MenuItem>
                                                ))}
                                            </TextField>

                                            <TextField
                                                type="number"
                                                name="nbRoom"
                                                label={propertyValues.nbRoom}
                                                value={props.values.nbRoom}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                InputProps={{ inputProps: { min: 0 } }}
                                                variant="outlined"
                                                error={props.errors.nbRoom}
                                                helperText={props.errors.nbRoom}
                                            />
                                            <TextField
                                                type="number"
                                                name="rentPrice"
                                                label={`${propertyValues.rentPrice}`}
                                                value={props.values.rentPrice}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="end">€</InputAdornment>,
                                                    inputProps: { min: 0 }
                                                }}
                                                variant="outlined"
                                                error={props.errors.rentPrice}
                                                helperText={props.errors.rentPrice}
                                            />
                                            <TextField
                                                type="number"
                                                name="taxesPrice"
                                                label={`${propertyValues.taxesPrice}`}
                                                value={props.values.taxesPrice}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="end">€</InputAdornment>,
                                                    inputProps: { min: 0 }
                                                }}
                                                variant="outlined"
                                                error={props.errors.taxesPrice}
                                                helperText={props.errors.taxesPrice}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                type="number"
                                                name="areaTotal"
                                                label={propertyValues.areaTotal}
                                                value={props.values.areaTotal}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="end">M²</InputAdornment>,
                                                    inputProps: { min: 0 }
                                                }}
                                                variant="outlined"
                                                error={props.errors.areaTotal}
                                                helperText={props.errors.areaTotal}
                                            />
                                            <TextField
                                                type="number"
                                                name="areaRoom"
                                                label={propertyValues.areaRoom}
                                                value={props.values.areaRoom}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="end">M²</InputAdornment>,
                                                    inputProps: { min: 0 }
                                                }}
                                                variant="outlined"
                                                error={props.errors.areaRoom}
                                                helperText={props.errors.areaRoom}
                                            />
                                            <TextField
                                                type="number"
                                                name="areaKitchen"
                                                label={propertyValues.areaKitchen}
                                                value={props.values.areaKitchen}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="end">M²</InputAdornment>,
                                                    inputProps: { min: 0 }
                                                }}
                                                variant="outlined"
                                                error={props.errors.areaKitchen}
                                                helperText={props.errors.areaKitchen}
                                            />
                                            <TextField
                                                type="number"
                                                name="areaLiving"
                                                label={propertyValues.areaLiving}
                                                value={props.values.areaLiving}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="end">M²</InputAdornment>,
                                                    inputProps: { min: 0 }
                                                }}
                                                variant="outlined"
                                                error={props.errors.areaLiving}
                                                helperText={props.errors.areaLiving}
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
                                                onClick={() => {
                                                    setModalIsOpen(false);
                                                    //props.handleReset();
                                                }}
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