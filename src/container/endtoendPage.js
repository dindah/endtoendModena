import React, { Component } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Row, Col, Card } from 'reactstrap';
import tableImage from '../asset/Rectangle 1.png';
import Image from '../asset/Rectangle 3.png';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

class CardWhite2 extends Component {
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
               height: '10em',
               boxShadow: 'none'
             }}
           >
             <Box
               sx={{
                 top: 0,
                 bottom: 0,
                 height: '10em',
                 width: '90em',
                 position: 'relative',
                 boxShadow: 'none'
               }}
               className='cardWhite'
             />
             <Grid container>
               <Grid item md={6}>
                 <Box
                   sx={{
                     position: 'relative',
                     height: '100vh',
                     width: '100%',
                     right: 120,
                     left: 120,
                     boxShadow: 'none'
                   }}
                 >
                   <Typography component="h1" variant="h3" color="inherit" gutterBottom>

                   </Typography>
                 </Box>
               </Grid>
             </Grid>
           </Paper>
        );
    }
}

export default CardWhite2;