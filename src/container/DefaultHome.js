import React, { Component } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Row, Col, Card } from 'reactstrap';
import tableImage from '../asset/Rectangle 1.png';
import Image from '../asset/Rectangle 3.png';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

class DefaultHome extends Component {
    constructor (prop) {
        super(prop);
        this.state = {
        }
    }

    render () {

        return (                
             <Paper
             sx={{
               position: 'relative',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               height: '80vh',
               boxShadow: 'none'
             }}
           >
             {<img style={{ display: 'none' }} src={`url('../asset/Rectangle 1.png')`} />}
             <Box
               sx={{
                 position: 'absolute',
                 top: 0,
                 bottom: 0,
                 right: 150,
                 left: 150,
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: '50% 0',
               }}
               className='background'
             />
             <Grid container>
               <Grid item md={12}>
                 <Box
                   sx={{
                     position: 'relative',
                     alignItems:"center",
                     justifyContent:"center",
                     margin: 'auto'
                   }}
                 >
                   <Typography component="h1" variant="h3" color="inherit" style={{ textAlign: 'center', color: 'white', margin: 'auto' }} >
                        Smartest Solution
                        <p>For Home And Living</p>
                   </Typography>
                   <Typography variant="h5" color="inherit" paragraph>
                   </Typography>
                 </Box>
               </Grid>
             </Grid>
             <Grid container>
               <Grid item md={12}>
                 <Box
                   sx={{
                     position: 'relative',
                     alignItems:"center",
                     justifyContent:"center",
                     margin: 'auto'
                   }}
                 >
                   <Typography component="h1" variant="h3" color="inherit" style={{ textAlign: 'center', color: 'white', margin: 'auto' }} >
                        Smartest Solution
                        <p>For Home And Living</p>
                   </Typography>
                   <Typography variant="h5" color="inherit" paragraph>
                   </Typography>
                 </Box>
               </Grid>
             </Grid>
           </Paper>
        );
    }
}

export default DefaultHome;