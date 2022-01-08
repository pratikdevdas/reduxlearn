import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App'

import noteReducer from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer';

import {createNote} from './reducers/noteReducer';
import {filterChange} from './reducers/filterReducer';

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

const store = createStore(reducer)

store.subscribe(()=>console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combine reducers form one reducers from many simple reducers'))

  ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>,
  document.getElementById('root')
  )




  /* const noteReducer = (state=[],action)=>{
  if(action.type === 'NEW_NOTE'){
    state.push(action.data)
    return state
  }
  return state
}
const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NOTE',
  data:{
    content:'the app state is in redux store',
    important:true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  data:{
    content:'state changes are made with backend',
    important:false,
    id: 2
  }
})
 */