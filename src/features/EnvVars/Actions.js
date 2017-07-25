
export function loadEnvVars(envVarName) {
  return function(dispatch) {
    dispatch({
      type: "LOADING_ENV_VARS",
      loading: true
    })

    fetch(`http://localhost:4040/api/projects/envVars?name=${envVarName}`).then(res => res.json()).then((results) => {
      dispatch({
        type: "LOADED_ENV_VARS",
        vars: results,
      })
    })
  }


}


