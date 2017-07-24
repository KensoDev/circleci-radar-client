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

  function getIconName(status) {
    if (status === "failed") {
      return "remove";
    }

    if (status === "running") {
      return "play"
    }

    if (status === "not_run") {
      return "ban";
    }

    return "ok";
  }

  return(
    <div className="build">
      <div className={`status status-${getClassName(props.status)}`}>
        <span title={props.status} className={`glyphicon glyphicon-${getIconName(props.status)}-circle`} 
          aria-hidden="true">
        </span>
      </div>
      <div className="details">
        <p className="title">
          {props.org}/{ props.name }
          <a href={props.build_url}>
            #{props.build_num}
          </a>
          <a title="Rebuild" onClick={ () => props.rebuildFunc(props.name, props.build_num) }>
            <span className="glyphicon glyphicon-refresh"></span>
          </a>
        </p>
        <p className="user">
          <img width="20" src={props.user.avatar_url} />
          <label>{ props.user.name || props.user.login }</label>
        </p>
        <div className="subject">
          { props.subject }
        </div>
        <p className="revision">
          <a href={`${props.vcs_url}/commit/${props.vcs_revision}`} target="_blank">
            {props.vcs_revision}
          </a>
        </p>
      </div>
    </div>
  );
}

