import React from "react";

import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, { DialogTitle, DialogActions } from 'material-ui/Dialog';

class SimpleDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    /**
	 * Function that handles internally the show part of the Modal
	 * 
	 * @memberof SimpleDialog
	 */
	handleOpen = () => {
        this.setState(function(prevState, props){
			return {open: !prevState.open}
		});
    };
  

    /**
	 * Function that handles the hide part of the Modal, internally.
	 * It also calls a parent callback if any was given.
	 * 
	 * @memberof SimpleDialog
	 */
	handleClose = value => {
		// send from parent
		if (this.props.onClose) {
			this.props.onClose();
		}
        this.setState(function(prevState, props){
			return {open: !prevState.open}
		});
    };

    
    /**
	 * React Component Lifecycle Method that runs when receiving new props.
	 * 
	 * @param {Object} nextProps 
	 * @memberof SimpleDialog
	 */
	componentWillReceiveProps(nextProps) {
		this.setState({
			open: nextProps.open
		  });
    }
  
    render() {
  
      return (
        <Dialog open={this.state.open}>
          <DialogTitle>Modal Title</DialogTitle>
          <div>
           {this.props.children}
           <hr/>
           <DialogActions>
               <Button onClick={this.handleClose}>
                    Close Dialog
               </Button>
            </DialogActions>
          </div>
        </Dialog>
      );
    }
  }

  SimpleDialog.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.Object,
  };

export default SimpleDialog;