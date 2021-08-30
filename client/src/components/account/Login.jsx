import {makeStyles,Dialog,withStyles,Box,Typography,ListItem,List} from '@material-ui/core';
const url = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
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
               </Box>

           </Box>
       </Dialog>
    )
}
export default withStyles(style)(Login);