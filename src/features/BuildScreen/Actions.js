import { NEW_BUILDS } from './ActionTypes';

export function fetchBuildStatus(branchName) {
  return function(dispatch) {
    fetch(`https://52bca464.ngrok.io/api/projects/builds?branchName=${branchName}`).then(res => res.json()).then((results) => {
      dispatch({
        type: NEW_BUILDS,
        builds: results,
      })
    });
  }
}

export function rebuild(name, buildNum) {
  return function(dispatch) {
    const data = {
      name,
      buildNum
    }

    fetch('https://52bca464.ngrok.io/api/projects/rebuild',{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
}
