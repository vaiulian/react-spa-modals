import React from 'react';

import SimpleDialog from './CustomDialog';
import Button from 'material-ui/Button';

class About extends React.Component {

    state = {
        open: false,
    };

    handleOpenFirst = () => {
        this.dialog1.handleOpen();
    };

    handleOpenSecond = () => {
        this.dialog2.handleOpen();
    }
  
    render() {
  
      return (
        <div>
            <h5>About Page</h5>
            <p>This page uses `refs` to access the `SimpleDialog` component and show 2 different instances of `Modal`</p>
            
            <Button onClick={this.handleOpenFirst}>
                Open First Modal
            </Button>
            
            <SimpleDialog ref={(dialog1) => { this.dialog1 = dialog1; }}>
                <div className="myModal firstModal">
                    <p>This is my first modal. It was opened by accesing the .handleOpen method of the first modal ref=dialog1</p>
                </div>
                <Button onClick={this.handleOpenSecond} >
                    Open Second Modal
                </Button>
                
                <SimpleDialog ref={(dialog2) => { this.dialog2 = dialog2; }}>
                    <div className="myModal secondModal">
                        <p>This is my second modal. It was opened by accesing the .handleOpen method of the second modal ref=dialog2</p>
                    </div>
                </SimpleDialog>
            </SimpleDialog>
        </div>
      );
    }
  }

export default About;