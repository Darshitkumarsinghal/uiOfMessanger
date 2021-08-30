import React from 'react';
import {AppBar, makeStyles, Toolbar,Box} from "@material-ui/core";
import Login from "./account/Login";
const useStyle = makeStyles({
    component: {
        height: '100vh',
        background: '#DCDCDC'
    },
    loginHeader: {
        background: '#00bfa5',
        height: 200,
        boxShadow: 'none'
    }
})
export const Messanger = () =>{
    const classes = useStyle();
    return (
        <Box className={classes.component}>
        <AppBar className={classes.loginHeader}>
            <Toolbar></Toolbar>
        </AppBar>
            <Login/>
        </Box>
    );
}

