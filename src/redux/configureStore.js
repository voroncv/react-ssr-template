import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'

// Reducers
import main from './main'

const reducer = combineReducers({
  main,
})

export default (initialState) => {
  return createStore(reducer, initialState, compose(
    applyMiddleware(thunkMiddleware)
  ))
}
