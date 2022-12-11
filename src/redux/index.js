import { combineReducers } from 'redux'
import reducer1 from './reducer1'
import reducer2 from './reducer2'
// import reducer3 from './reducer3'

const appReducer = combineReducers({
  state1: reducer1,
  state2: reducer2,
})

export default appReducer
// smart/dumb components
