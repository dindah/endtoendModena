import React, { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DefaultHome from './DefaultHome';
import CardWhite1 from './CardWhite1';
import GridCardPicture from './GridCardPicture';
import CardWhite2 from './endtoendPage';

class HomePage extends Component {
    constructor (prop) {
        super(prop);
        this.state = {
        }
    }

    render () {
        const theme = createTheme({
            palette: {
              background: {
                default: '#413F42',
                paper: '#413F42',
              },
            },
          });

        return (  
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <main>
                <DefaultHome />
                <CardWhite1 />
                <GridCardPicture />
                <CardWhite2 />
            </main>
            </ThemeProvider>
        );
    }
}

export default HomePage;