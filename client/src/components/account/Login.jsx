import {useContext}  from "react";
import {GoogleLogin} from 'react-google-login';
import {makeStyles,Dialog,withStyles,Box,Typography,ListItem,List} from '@material-ui/core';
import {AccountContext} from "../../context/AccountProvider";

const style = {
    dialogPaper: {
        marginTop: '12%',
        height: '95%',
        width: '60%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
};
const useStyle = makeStyles({
    component: {
        display: 'flex'
    },
    dialog: {
        padding: '56px 0 56px 56px',
    },
    qr: {
        margin: '50px 0 0 50px',
        height: 264,
        width: 264
    },
    title: {
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300
    },
    list: {
        '&  > *': {
            padding: 0,
            marginTop: 15,
            fontSize: 18,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    }
})


const Login = ({classes}) =>{
    const classname = useStyle();
    const url = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const clientId = '159147234974-ni98qhbf5u91ghb99f0mmpekmqqcsgr5.apps.googleusercontent.com';

    const {account,setAccount} = useContext(AccountContext);

    const onLoginSuccess = (res) => {
        console.log("login Successfull",res.profileObj);
        setAccount(res.profileObj);
    }
    const onLoginFailure = () => {
        console.log("LLL Lg gye");
    }

    return(
       <Dialog open={true}
       classes={{paper: classes.dialogPaper}}
               BackdropProps={{style: {backgroundColor: 'unset'}}}
       >
           <Box className={classname.component}>
               <Box className={classname.dialog}>
                   <Typography className={classname.title}>To use Messenger on your computer:</Typography>
                   <List className={classname.list}>
                       <ListItem>1. Open Messenger Here</ListItem>
                       <ListItem>2. Tap Google Button</ListItem>
                       <ListItem>3. Pick Your GMAIL and then chat with your Bestie</ListItem>
                   </List>

               </Box>

               <Box style={{position:'relative'}}>
                   <img src={url} alt="QR" className={classname.qr} />
                    <Box style={{position: 'absolute', left: '50%', top: '50%', transform: 'translateX(0%) translateY(-25%)'}}>
                   <GoogleLogin
                   clientId={clientId}
                   buttonText=""
                   isSignedIn={true}
                   onSuccess={onLoginSuccess}
                   onFailure={onLoginFailure}
                   cookiePolicy={'single_host_origin'}
                   />
                    </Box>
               </Box>

           </Box>
       </Dialog>
    )
}
export default withStyles(style)(Login);