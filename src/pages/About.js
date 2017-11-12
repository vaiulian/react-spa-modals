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
            <Button onClick={this.handleOpenFirst}>
                Open 1
            </Button>
            <SimpleDialog ref={(dialog1) => { this.dialog1 = dialog1; }}>
                <Button onClick={this.handleOpenSecond} >
                    Open 2
                </Button>
                <SimpleDialog ref={(dialog2) => { this.dialog2 = dialog2; }}/>
            </SimpleDialog>
        </div>
      );
    }
  }


SimpleDialog

export default About;