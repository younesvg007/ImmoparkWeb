import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function UseForm(initialValues){

    const[values, setValues] = useState(initialValues);

    //permet d'ecrire dans le input
    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    return {
            values,
            setValues,
            handleInputChange
    }
}

export function Form(props){
    const classes = useStyle();
    return(
        <form className={classes.root} {...props}>
            {props.children}
        </form>
    )
}

