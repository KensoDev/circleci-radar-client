export function loadEnvVars(envVarName) {
  return function(dispatch) {
    dispatch({
      type: 'LOADING_ENV_VARS',
      loading: true,
    })

    fetch(`/api/projects/envVars?name=${envVarName}`, {
      credentials: 'include',
    }).then(res => res.json()).then(results => {
      dispatch({
        type: 'LOADED_ENV_VARS',
        vars: results,
      })
    })
  }
}

export function updateEnvVars(envVarName, envVarValue) {
  return function(dispatch) {
    dispatch({
      type: 'LOADING_ENV_VARS',
      loading: true,
    })

    const data = {
      name: envVarName,
      value: envVarValue,
    }

    fetch(`/api/projects/envVars`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(results => {
        dispatch({
          type: 'LOADING_ENV_VARS',
          loading: false,
        })

        dispatch(loadEnvVars(envVarName))
      })
  }
}
