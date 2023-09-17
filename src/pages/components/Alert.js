import React from 'react';

function Alert(props) {
  return (
    <div class="alert alert-primary" role="alert">
      {props.msg}
    </div>
  );
}

export default Alert;
