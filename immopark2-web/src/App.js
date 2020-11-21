import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import Property from "./components/Pages/Property/Property";
import Client from "./components/Pages/Client/Client";
import Contract from "./components/Pages/Contract/Contract";
import AllProperties from "./components/Pages/Property/AllProperties";
import AddProperty from "./components/Pages/Property/AddProperty";
import AllClients from "./components/Pages/Client/AllClients";
import AddClient from "./components/Pages/Client/AddClient";
import AllContract from "./components/Pages/Contract/AllContract";
import NewContract from "./components/Pages/Contract/NewContract";

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/property' exact component={Property}/>
                <Route path='/allproperties' exact component={AllProperties}/>
                <Route path='/addproperty' exact component={AddProperty}/>
                <Route path='/client' exact component={Client}/>
                <Route path='/allclients' exact component={AllClients}/>
                <Route path='/addclient' exact component={AddClient}/>
                <Route path='/contract' exact component={Contract}/>
                <Route path='/allcontracts' exact component={AllContract}/>
                <Route path='/newcontract' exact component={NewContract}/>
            </Switch>
        </Router>
    );
}
export default App;
