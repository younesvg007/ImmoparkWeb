import React, {useEffect, useState} from 'react';
import {Paper, makeStyles, Card, CardActionArea, CardActions, Button, Grid } from "@material-ui/core";
import {ModalProperty} from "../../Modal/ModalProperty";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./propertyCard.css";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function AllProperties() {

    const classes = useStyles();
    const [properties, setProperties] = useState([]);
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [propertyValues, setPropertyValues] = useState({});
    const notify = (address, type) => {
        toast.error(`${type} has been successfully deleted at the address ${address} !`);
    }

    const displayProperties = async () =>{
        await axios.get(`http://localhost:51915/immopark/api/property`)
            .then(data => setProperties(data.data)); //then => ca renvoi une promesse: renvoi des donnes qui nexise pas sur front end que tu va receptionner grace a api et que tu peux lleur attribuer un comportement
    }

    const deleteProperty = async (id, address, type) => {
        await axios.delete(`http://localhost:51915/immopark/api/property/${id}`)
            .then(response => (console.log(response)))
            .then(() => setProperties(properties.filter(property => property.id !== id)))
            .then(() => notify(address,type))
    }

    useEffect(() => {
        displayProperties();
    }, [])

    return (
        <div>
            <h1 className='allproperties'>All Properties</h1>
            <Paper >
                <Grid container spacing={1} className={"card-grid"}>
                    {properties.map((property, index) => <div key={index} >
                        <Card className="card-style">
                            <CardActionArea>
                                <Grid container spacing={1}  className="card-header">
                                    <Grid item xs={12}>
                                        <div >
                                            <h1 className={"card-title"}>{property.type}</h1>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div >
                                            <h3 className={"card-secondary"}>Address :</h3><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{property.address}</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <hr className="solid"/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <h3 className={"card-title-second"}>Informations</h3><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                         <br/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Area Total :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{property.areaTotal} M²</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Area Room :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{property.areaRoom} M²</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Area Living :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{property.areaLiving} M²</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Area Kitchen :</p><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{property.areaKitchen} M²</p><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Number of rooms :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{property.nbRoom}</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Floor :</p><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{property.floor}</p><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <hr className="solid"/><br/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <h3 className={"card-secondary"}>Rent Price : </h3><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <h4 className={"card-secondary"}> {property.rentPrice} €</h4><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <h3 className={"card-secondary"}>Taxes Price : </h3><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <h4 className={"card-secondary"}> {property.taxesPrice} €</h4><br/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </CardActionArea>
                            <CardActions className="card-footer">
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <Button
                                            onClick={() => {
                                                setModalIsOpen(true);
                                                setPropertyValues(property);
                                            }}
                                            size="medium"
                                            color="primary"
                                            variant="contained"
                                            className={classes.button}>
                                            ✏️Edit
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            onClick={ () => deleteProperty(property.id, property.address, property.type)}
                                            size="medium"
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                        >
                                            🗑️  Delete
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card> <br/>

                    </div>)}
                </Grid>
            </Paper>
            <ToastContainer />
            <ModalProperty
                propertyValues={propertyValues}
                setModalIsOpen={setModalIsOpen}
                modalIsOpen={modalIsOpen}
            />
        </div>
    );
}