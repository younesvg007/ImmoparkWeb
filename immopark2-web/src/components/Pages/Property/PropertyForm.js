import React from 'react';
import {Grid, TextField, MenuItem, InputAdornment} from "@material-ui/core";
import {UseForm, Form} from "../../Form/UseForm";
import {Button} from "../../Button/Button";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
//import { useHistory } from "react-router-dom";


const initialValues = {
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
    };

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

export default function PropertyForm(){

    const {
        values,
        handleInputChange
    } = UseForm(initialValues);
    //const history = useHistory(); // history.push('/example');

    const notify = (type, address) => toast.success(`${type} has been successfully added at the address ${address} !`);

    const CreateProperty = async (e) =>{
        e.preventDefault();
        //await axios.post( "http://localhost:51915/immopark/api/property/", values)
        await axios.post( "http://localhost:5000/immopark/api/property/", values)
            .then(response => (console.log(response)))
            .then(() => notify(values.type,values.address))
            .then(() => window.location.href = '/allproperties')
            .catch(error => (console.log(error)));
    }

    return (
        <div>
            <Form onSubmit={CreateProperty} >
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            required
                            variant="outlined"
                            label="Address"
                            name="address"
                            value={values.address}
                            onChange={handleInputChange}
                            error={values.address === ""}
                            helperText={values.address === "" ? 'Required !' : ' '}
                        />
                        <TextField
                            variant="outlined"
                            label="Floor"
                            type="number"
                            name="floor"
                            InputProps={{ inputProps: { min: -1 } }}
                            value={values.floor}
                            onChange={handleInputChange}

                        />
                        <TextField
                            required
                            select
                            label="Type"
                            name="type"
                            value={values.type}
                            onChange={handleInputChange}
                            variant="outlined"
                            error={values.type === ""}
                            helperText={values.type === "" ? 'Required !' : ' '}
                        >
                            {typeOptions.map((type) => (
                                <MenuItem key={type.value} value={type.value}>
                                    {type.value}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            required
                            label="Number of Rooms"
                            name="nbRoom"
                            type="number"
                            value={values.nbRoom}
                            InputProps={{ inputProps: { min: 0 } }}
                            onChange={handleInputChange}
                            variant="outlined"
                            error={values.nbRoom === ""}
                            helperText={values.nbRoom === "" ? 'Required !' : ' '}
                        />
                        <TextField
                            required
                            label="Rent Price"
                            name="rentPrice"
                            type="number"
                            value={values.rentPrice}
                            onChange={handleInputChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">€</InputAdornment>,
                                inputProps: { min: 0 }
                            }}
                            variant="outlined"
                            error={values.rentPrice === ""}
                            helperText={values.rentPrice === "" ? 'Required !' : ' '}
                        />
                        <TextField
                            required
                            label="Taxes Price"
                            name="taxesPrice"
                            type="number"
                            value={values.taxesPrice}
                            onChange={handleInputChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">€</InputAdornment>,
                                inputProps: { min: 0 }
                            }}
                            variant="outlined"
                            error={values.taxesPrice === ""}
                            helperText={values.taxesPrice === "" ? 'Required !' : ' '}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            label="Area Total"
                            name="areaTotal"
                            type="number"
                            value={values.areaTotal}
                            onChange={handleInputChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">M²</InputAdornment>,
                                inputProps: { min: 0 }
                            }}
                            variant="outlined"
                            error={values.areaTotal === ""}
                            helperText={values.areaTotal === "" ? 'Required !' : ' '}
                        />
                        <TextField
                            required
                            label="Area Room"
                            name="areaRoom"
                            type="number"
                            value={values.areaRoom}
                            onChange={handleInputChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">M²</InputAdornment>,
                                inputProps: { min: 0 }
                            }}
                            variant="outlined"
                            error={values.areaRoom === ""}
                            helperText={values.areaRoom === "" ? 'Required !' : ' '}
                        />
                        <TextField
                            required
                            label="Area Kitchen"
                            name="areaKitchen"
                            type="number"
                            value={values.areaKitchen}
                            onChange={handleInputChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">M²</InputAdornment>,
                                inputProps: { min: 0 }
                            }}
                            variant="outlined"
                            error={values.areaKitchen === ""}
                            helperText={values.areaKitchen === "" ? 'Required !' : ' '}
                        />
                        <TextField
                            required
                            label="Area Living"
                            name="areaLiving"
                            type="number"
                            value={values.areaLiving}
                            onChange={handleInputChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">M²</InputAdornment>,
                                inputProps: { min: 0 }
                            }}
                            variant="outlined"
                            error={values.areaLiving === ""}
                            helperText={values.areaLiving === "" ? 'Required !' : ' '}
                        />
                    </Grid>
                </Grid>
                <Grid container alignItems="flex-end" justify="center">
                    <Button
                        buttonStyle='btn--outline'
                        type='submit'>
                        VALIDATION
                    </Button>
                </Grid>
            </Form>
            <ToastContainer />
        </div>
    )
}