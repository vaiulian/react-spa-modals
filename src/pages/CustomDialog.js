import React from "react";

import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle, DialogActions } from 'material-ui/Dialog';
import PersonIcon from 'material-ui-icons/Person';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';

class SimpleDialog extends React.Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };
  
    handleClose = value => {
        this.setState({open: false});
    };
  
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
    classes: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func,
    selectedValue: PropTypes.string,
  };

export default SimpleDialog;