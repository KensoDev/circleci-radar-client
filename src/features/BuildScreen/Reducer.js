import { NEW_BUILDS } from './ActionTypes'

const initialState = []

export default function(state = initialState, action) {
  if (action.type === NEW_BUILDS) {
    return action.builds
  }

  return state
}
