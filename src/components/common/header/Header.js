import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="app-bar">
                <AppBar position="static">
                    <Toolbar>
                        <div className="logo"></div>
                        <Typography variant="title" color="inherit" className="flex">

                        </Typography>

                        <Button color="inherit" >Equipos</Button>
                        <Button color="inherit" >Calendarios</Button>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;
