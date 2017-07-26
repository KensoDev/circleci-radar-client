import React, { Component } from 'react'

class Build extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rebuild: false,
    }
  }

  getClassName(status) {
    if (status === 'failed') {
      return 'danger'
    }

    if (status === 'running') {
      return 'info'
    }

    if (status === 'not_run') {
      return 'warning'
    }

    if (status === 'fixed') {
      return 'success'
    }

    return status
  }

  getButtonAnimationClass() {
    if (this.state.rebuild === true) {
      return 'rebuildButtonSpin'
    }

    if (this.props.status === 'running') {
      return 'hidden'
    }

    return ''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({ rebuild: false })
    }
  }

  getIconName(status) {
    if (status === 'failed') {
      return 'remove'
    }

    if (status === 'running') {
      return 'play'
    }

    if (status === 'not_run') {
      return 'ban'
    }

    return 'ok'
  }

  rebuild() {
    this.setState({ rebuild: true })
    this.props.rebuildFunc(this.props.name, this.props.build_num, this.props.branch)
  }

  render() {
    return (
      <div className="build">
        <div className={`status status-${this.getClassName(this.props.status)}`}>
          <span
            title={this.props.status}
            className={`glyphicon glyphicon-${this.getIconName(this.props.status)}-circle`}
            aria-hidden="true"
          />
        </div>
        <div className="details">
          <p className="title">
            {this.props.org}/{this.props.name}
            <a href={this.props.build_url}>#{this.props.build_num}</a>
            <a title="Rebuild" onClick={() => this.rebuild()}>
              <span className={`${this.getButtonAnimationClass()} rebuildButton glyphicon glyphicon-refresh`} />
            </a>
          </p>
          <p className="user">
            <img width="20" src={this.props.user.avatar_url} />
            <label>
              {this.props.user.name || this.props.user.login}
            </label>
          </p>
          <div className="subject">
            {this.props.subject}
          </div>
          <p className="revision">
            <a href={`${this.props.vcs_url}/commit/${this.props.vcs_revision}`} target="_blank">
              {this.props.vcs_revision}
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Build
