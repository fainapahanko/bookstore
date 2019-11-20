import React from 'react';
import { Alert } from 'reactstrap';

class WarningSign extends React.Component {
  render(){
    return (
    <div>
        <Alert color="danger">
          {this.props.text}
        </Alert>
    </div>
    );
  }
};

export default WarningSign