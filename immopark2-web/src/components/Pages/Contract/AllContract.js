import React, {useEffect, useState} from 'react';
import {Button, Card, CardActionArea, CardActions, Grid, makeStyles, Paper} from "@material-ui/core";
import {toast, ToastContainer} from "react-toastify";
import {ModalContract} from "../../Modal/ModalContract";
import {ModalDocument} from "../../Modal/ModalDocument";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function AllContract(){
    const classes = useStyles();
    const [contracts, setContracts] = useState([]);
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [modalDocIsOpen,setModalDocIsOpen] = useState(false);
    const [contractValues, setContractValues] = useState({});

    const notify = (id) => {
        toast.error(`The contract n° ${id} has been successfully deleted !`);
    }

    const displayContracts = async () =>{
        await axios.get(`http://localhost:51915/immopark/api/contract`)
            .then(data => setContracts(data.data)); //then => ca renvoi une promesse: renvoi des donnes qui nexise pas sur front end que tu va receptionner grace a api et que tu peux lleur attribuer un comportement
    }

    const deleteContract = async (id) => {
        await axios.delete(`http://localhost:51915/immopark/api/contract/${id}`)
            .then(response => (console.log(response)))
            .then(() => setContracts(contracts.filter(contract => contract.id !== id)))
            .then(() => notify(id))
    }

    useEffect(() => {
        displayContracts();
    }, [])

    return(
        <>
            <div>
                <h1 className='allcontracts'>All Contracts </h1>
            </div>
                <Paper >
                    <Grid container spacing={1} className={"card-grid"}>
                        {contracts.map((contract, index) => <div key={index} >
                            <Card className="card-style">
                                <CardActionArea>
                                    <Grid container spacing={1}  className="card-header">
                                        <Grid item xs={12}>
                                            <div >
                                                <h1 className={"card-title"}> Contract n°{contract.id} </h1>
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
                                                <p className={"card-secondary"}>Start Date :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.startDate}</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>End Date :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.endDate}</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>Duration :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.duration} Months</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>IndexBase :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.indexBase}</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>Amount Garantee :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.amountGarantee} €</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>Signature Date :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.signatureDate}</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>IndexEntry Water :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.indexEntryWater} M³</p>
                                            </div>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>IndexEntry Gaz :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.indexEntryGaz} M²</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>IndexEntry Electricity : :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.indexEntryElectricity} kWh</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>Is CautionPaid</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                {contract.cautionPaid ? <p className={"true"}>YES</p> : <p className={"false"}>NO</p>}
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>PaymentCaution Date :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.paymentCautionDate}</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>Is FirstMonthPaid</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                {contract.isFirstMonthPaid ? <p className={"true"}>YES</p> : <p className={"false"}>NO</p>}
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>Entry Date :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.entryDate}</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>Out Date :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.outDate}</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>IndexOut Water :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.indexOutWater} M³</p>
                                            </div>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>IndexOut Gaz :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.indexOutGaz} M³</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>IndexOut Electri. :</p><br/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.indexOutElectricity} kWh</p><br/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <hr className="solid"/><br/>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>ID Property :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.idProperty}</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p className={"card-secondary"}>Nat. register Client :</p><br/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <p >{contract.idClient}</p><br/>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </CardActionArea>
                                <CardActions className="card-footer">
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} className="btn-download">
                                            <Button
                                                onClick={() => {
                                                    setModalDocIsOpen(true);
                                                    setContractValues(contract);
                                                }}
                                                size="medium"
                                                color="primary"
                                                variant="contained"
                                                className={classes.button}>
                                                    Download
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                onClick={() => {
                                                    setModalIsOpen(true);
                                                    setContractValues(contract);
                                                }}
                                                size="medium"
                                                color="primary"
                                                variant="contained"
                                                className={classes.button}>
                                                ✏️Edit
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6} >
                                            <Button
                                                onClick={() => deleteContract(contract.id)}
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
            <ModalDocument
                contractValues={contractValues}
                setModalDocIsOpen={setModalDocIsOpen}
                modalDocIsOpen={modalDocIsOpen}
            />
            <ModalContract
                contractValues={contractValues}
                setModalIsOpen={setModalIsOpen}
                modalIsOpen={modalIsOpen}
            />
        </>
    );
}