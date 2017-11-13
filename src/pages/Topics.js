import React from 'react';

import SimpleDialog from './CustomDialog';
import Button from 'material-ui/Button';

class Topics extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    /**
	 * Function that updates the state internally.
	 * Used to show the Modal.
	 * 
	 * @memberof Topics
	 */
	handleOpen = () => {
        this.setState(function(prevState, props){
			return {open: !prevState.open}
		});
	};
	
    /**
	 * Function that updates the state internally.
	 * Used to hide the Modal.
	 * 
	 * @memberof Topics
	 */
    handleClose = () => {
        this.setState(function(prevState, props){
			return {open: !prevState.open}
		});
    }
  
    render() {
  
      return (
        <div>
            <h5>Topics Page</h5>
            <p>This page uses simple state management from parent to child to access the `SimpleDialog` component and show the same instances of `Modal`</p>
			<p>It also passes a callback `handleClose` function to `SimpleDialog` that the modal can access to update the state of it's actual parent when closing itself.</p>
            
            <Button onClick={this.handleOpen}>
                Open Modal
            </Button>
            
            <SimpleDialog open={this.state.open} onClose={this.handleClose}>
                <div className="myModal firstModal">
                    <p>This is my third modal. It was opened by passing this.state.open to the `SimpleDialog` component.</p>
                </div>
            </SimpleDialog>
        </div>
      );
    }
  }

export default Topics;