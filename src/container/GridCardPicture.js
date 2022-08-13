import React, { Component } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Row, Col, Card } from 'reactstrap';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

class GridCardPicture extends Component {
    constructor (prop) {
        super(prop);
        this.state = {
        }
    }

    render () {
      const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        return (                      
          <Paper
          sx={{
            position: 'relative',
            backgroundSize: 'cover',
            boxShadow: 'none'
          }}
          className='containerGrid'
        >
          {/* End hero unit */}
          <Grid container spacing={0} 
          sx={{
            boxShadow: 'none'
          }}>
              <Grid item key={cards} md={6}>
                <Card
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                <Box
                  sx={{
                    top: 0,
                    bottom: 0,
                    height: '45em',
                    width: '50em',
                    position: 'relative',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: 'none'
                  }}
                  className='logoSuryo'
                />
                </Card>
              </Grid>
              <Grid item key={cards} md={6}>
                <Card
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                <Box
                  sx={{
                    top: 0,
                    bottom: 0,
                    height: '45em',
                    width: '45em',
                    position: 'relative',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: 'none'
                  }}
                  className='logoSatrio'
                />
                </Card>
              </Grid>
          </Grid>
        </Paper>
        );
    }
}

export default GridCardPicture;