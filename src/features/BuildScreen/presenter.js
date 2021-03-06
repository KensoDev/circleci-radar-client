import React, { Component } from 'react'
import Build from './Build'

import './style.css'

class BuildScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      branchName: 'develop',
    }
  }

  componentDidMount() {
    this.load()
  }

  load() {
    console.log(this.state.branchName)
    this.props.load(this.state.branchName)
  }

  changeBranchAndLoad() {
    console.log(this.refs.branchName.value)

    this.setState(
      {
        branchName: this.refs.branchName.value,
      },
      () => {
        this.load()
      },
    )
  }

  rebuildAll() {
    const confirmation = window.confirm('Are you sure? This is going to trigger a full rebuild for all projects')

    if (confirmation) {
      this.props.rebuildAll(this.state.branchName)
    }
  }

  renderBuild(build) {
    return <Build rebuildFunc={this.props.rebuild} key={build.name} {...build} />
  }

  render() {
    return (
      <div className="appContainer">
        <div className="row">
          <div className="col-lg-12">
            <div className="input-group">
              <input type="text" ref="branchName" className="form-control" placeholder={this.state.branchName} />
              <span className="input-group-btn">
                <button
                  onClick={() => {
                    this.changeBranchAndLoad()
                  }}
                  className="btn btn-default"
                  type="button"
                >
                  Go!
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="builds">
          {this.props.builds.map(build => {
            return this.renderBuild(build)
          })}
        </div>

        <div className="rebuild">
          <button onClick={() => this.rebuildAll()} className="btn-lg btn-danger">
            Rebuild All for {this.state.branchName}
          </button>
        </div>
      </div>
    )
  }
}

export default BuildScreen
