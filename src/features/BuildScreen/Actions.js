export function fetchBuildStatus(branchName) {
  return function(dispatch) {
    fetch(`http://localhost:4040/api/projects/builds?branchName=${branchName}`).then(res => res.json()).then((results) => {
      dispatch({
        type: "NEW_BUILDS",
        builds: results,
      })
    });
  }
}


