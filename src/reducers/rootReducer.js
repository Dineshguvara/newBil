import { combineReducers } from '@reduxjs/toolkit'
import changeState from './sidebarReducer'

const rootReducer = combineReducers({
  nav: changeState,
})

export default rootReducer
