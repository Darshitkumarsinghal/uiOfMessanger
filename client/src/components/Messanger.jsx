import React, {useContext} from 'react';
import {AppBar, makeStyles, Toolbar,Box} from "@material-ui/core";
import {AccountContext} from "../context/AccountProvider";
//component
import Login from "./account/Login";
import chatBox from "./chatBox";
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
    const {account } = useContext(AccountContext);
    return (
        <Box className={classes.component}>
        <AppBar className={classes.loginHeader}>
            <Toolbar></Toolbar>
        </AppBar>
            {account ? <chatBox/> : <Login/>}
        </Box>
    );
}

