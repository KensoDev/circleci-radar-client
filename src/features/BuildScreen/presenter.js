import React, { Component } from 'react';
import Build from './Build';

class BuildScreen extends Component {
  componentDidMount() {
    this.props.load('develop');
  }

  renderBuild(build) {
    return <Build key={build.name} {...build} />
  }

  render() {
    return (
      <div className="row buildsContainer">
        { this.props.builds.map((build) => {
          return this.renderBuild(build)
        }) }

      </div>
    );
  }
}

export default BuildScreen;

