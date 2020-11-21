import React, {useEffect, useState} from 'react';
import {Button, Card, CardActionArea, CardActions, Grid, makeStyles, Paper} from "@material-ui/core";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import {ModalClient} from "../../Modal/ModalClient";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function AllClients(){

    const classes = useStyles();
    const [clients, setClients] = useState([]);
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [clientValues, setClientValues] = useState({});

    const notify = (firstName, lastName) => {
        toast.error(`The client ${firstName} ${lastName} has been successfully deleted !`);
    }

    const displayClients = async () =>{
        await axios.get(`http://localhost:51915/immopark/api/client`)
            .then(data => setClients(data.data)); //then => ca renvoi une promesse: renvoi des donnes qui nexise pas sur front end que tu va receptionner grace a api et que tu peux lleur attribuer un comportement
    }

    const deleteClient = async (id, firstName, lastName) => {
        await axios.delete(`http://localhost:51915/immopark/api/client/${id}`)
            .then(response => (console.log(response)))
            .then(() => setClients(clients.filter(client => client.natRegister !== id)))
            .then(() => notify(firstName, lastName))

    }

    useEffect(() => {
        displayClients();
    }, [])

    return(
        <>
            <div>
                <h1 className='allclients'>All Clients</h1>
            </div>
            <Paper >
                <Grid container spacing={1} className={"card-grid"}>
                    {clients.map((client, index) => <div key={index} >
                        <Card className="card-style">
                            <CardActionArea>
                                <Grid container spacing={1}  className="card-header">
                                    <Grid item xs={12}>
                                        <div >
                                            <h1 className={"card-title-client"}>{client.civility}.  {client.firstName} {client.lastName}</h1>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <h3 className={"card-title-second"}>Informations </h3>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <br/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <hr className="solid"/><br/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Sexe :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{client.sexe}</p><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Address :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{client.address}, {client.postCode}</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Town :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{client.town}</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Country :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{client.country}</p><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Age :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{client.age}</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>BirthDay :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{client.birthDay}</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>BirthPlace :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{client.birthPlace}</p><br/>
                                        </div>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>National Register :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{client.natRegister}</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Email :</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{client.email}</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p className={"card-secondary"}>Phone Number :</p><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <p >{client.gsm}</p><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <hr className="solid"/><br/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <h4 className={"card-secondary"}>isRenter : </h4><br/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            {client.isRenter ? <h3 className={"true"}>YES</h3> : <h3 className={"false"}>NO</h3>}
                                        </div><br/>
                                    </Grid>
                                </Grid>
                            </CardActionArea>
                            <CardActions className="card-footer">
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <Button
                                            onClick={() => {
                                                setModalIsOpen(true);
                                                setClientValues(client);
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
                                            onClick={ () => deleteClient(client.natRegister, client.firstName, client.lastName)}
                                            size="medium"
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                        >
                                            🗑️ Delete
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card> <br/>

                    </div>)}
                </Grid>
            </Paper>
            <ToastContainer />
            <ModalClient
                clientValues={clientValues}
                setModalIsOpen={setModalIsOpen}
                modalIsOpen={modalIsOpen}
            />
        </>
    );
}