import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class EnvVars extends Component {
  constructor(props) {
    super(props);
  }

  drawCell(varObject) {
    return <tr>
      <td>{ varObject.projectName }</td>
      <td>{ varObject.envVarValue }</td>
    </tr>;
  }

  render() {
    let buttonText = "Search"

    if (this.props.loading) {
      buttonText = "loading..."
    }

    return (
      <div className="appContainer">
        <div className="row">
          <div className="col-lg-4">
            <div className="input-group">
              <input type="text"
                ref="envVarName"
                className="form-control"
                placeholder="Check the value of an ENV VAR for all the projects" />
              <span className="input-group-btn">
                <button
                  disabled={this.props.loading}
                  onClick={ () => this.props.loadEnvVars(this.refs.envVarName.value) }
                  className="btn btn-default" type="button">{ buttonText }</button>
              </span>
            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>
                Project Name
              </th>
              <th>
                Var Value
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.vars.map((varObject) => {
                return this.drawCell(varObject)
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default EnvVars;

