import { NEW_BUILDS } from './ActionTypes'

export function fetchBuildStatus(branchName) {
  return function(dispatch) {
    console.log("Calling builds");

    fetch(`/api/projects/builds?branchName=${branchName}`, {
      credentials: 'include'
    }).then(res => res.json())
      .then(results => {
        dispatch({
          type: NEW_BUILDS,
          builds: results,
        })
      })
  }
}

export function rebuild(name, buildNum, branchName) {
  return function(dispatch) {
    const data = {
      name,
      buildNum,
    }

    fetch('/api/projects/rebuild', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        // Wait for CircleCI to understand that there is an actual build
        // This is a result of multiple failures trying to query that
        // in real time
        setTimeout(() => {
          dispatch(fetchBuildStatus(branchName))
        }, 3000)
      })
  }
}

export function rebuildAll(name) {
  return function(dispatch) {
    const data = {
      name,
    }

    fetch('/api/projects/rebuildAll', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        setTimeout(() => {
          dispatch(fetchBuildStatus(name))
        }, 3000)
      })
  }
}
