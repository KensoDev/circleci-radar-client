import React from 'react';

export default function Build(props) {
  function getClassName(status) {
    if (status === "failed") {
      return "danger";
    }

    if (status === "running") {
      return "info";
    }

    if (status === "not_run") {
      return "warning";
    }

    return status;
  }

  return(
    <div className="col-xs-3">
      <div className={`panel panel-${getClassName(props.status)}`}>
        <div className="panel-heading">
          { props.name }
        </div>
        <div className="panel-body">
          <ul>
            <li>
              <a href={props.build_url}>
                { props.build_num}
              </a>
            </li>
            <li>
              <a href={props.commit_url}>
                Browse Commit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

