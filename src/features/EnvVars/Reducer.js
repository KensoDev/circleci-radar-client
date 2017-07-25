const initialState = {
  loading: false,
  vars: [],
}

export default function (state = initialState, action) {
  if (action.type === "LOADING_ENV_VARS") {
    return {
      loading: true,
      vars: []
    }
  }

  if (action.type === "LOADED_ENV_VARS") {
    return {
      loading: false,
      vars: action.vars,
    }
  }
  return state;
}

