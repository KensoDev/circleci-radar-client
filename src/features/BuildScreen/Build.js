import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default function Build(props) {
  function getClassName(status) {
    return status;
  }

  return(
    <div className="col-xs-3">
      <div className={`panel panel-${getClassName(props.status)}`}>
        <div className="panel-heading">
          { props.name }
        </div>
        <div className="panel-body">
          { props.name }
        </div>
      </div>
    </div>
  );
}

