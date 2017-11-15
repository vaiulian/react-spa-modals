import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom' 

import './App.css';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import { MenuItem } from 'material-ui/Menu';

import Drawer from 'material-ui/Drawer';

import Container from './pages/Container';

class App extends Component {

	state = {
    	openDrawer: false,
  	};

  /**
   * Function that runs on opening the Drawer
   * 
   * @memberof App
   */
  	handleDrawerOpen = () => {
    	this.setState({ openDrawer: true });
  	};


  /**
   * Function that runs on closing the Drawer
   * 
   * @memberof App
   */
	handleDrawerClose = () => {
    	this.setState({ openDrawer: false });
  	};

  	render() {
    	return (
    		<Router>
    			<div>

        		<AppBar position="static">
					<Toolbar>
						<IconButton color="contrast" aria-label="Menu" onClick={this.handleDrawerOpen}>
							<MenuIcon />
						</IconButton>
						<Typography type="title" color="inherit">
						ReactJS Project
						</Typography>
					</Toolbar>
        		</AppBar>
        
				<Drawer
				open={this.state.openDrawer}
				onRequestClose={this.handleDrawerClose}
				>
					<MenuItem className="menuItem" onClick={this.handleDrawerClose}>
						<Link to="/">Home</Link>
					</MenuItem>
					<MenuItem className="menuItem" onClick={this.handleDrawerClose}>
						<Link to="/about">About</Link>
					</MenuItem>
					<MenuItem className="menuItem" onClick={this.handleDrawerClose}>
						<Link to="/topics">Topics</Link>
					</MenuItem>
				</Drawer>

        		<Container />

        		</div>
      		</Router>
    );
  }
}

export default App;
