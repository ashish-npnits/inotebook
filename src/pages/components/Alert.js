import React from 'react';

function Alert(props) {
  return (
    <div className={`alert alert-${props.alert.type} ${props.alert.type?'':'d-none'}`} role="alert">
      {props.alert.msg}
  </div>
  );
}

export default Alert;
