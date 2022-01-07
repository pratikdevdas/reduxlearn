import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App'
import noteReducer from './reducers/noteReducer'

// const noteReducer = (state=[],action)=>{
//   if(action.type === 'NEW_NOTE'){
//     state.push(action.data)
//     return state
//   }
//   return state
// }
// const store = createStore(noteReducer)

// store.dispatch({
//   type: 'NEW_NOTE',
//   data:{
//     content:'the app state is in redux store',
//     important:true,
//     id: 1
//   }
// })

// store.dispatch({
//   type: 'NEW_NOTE',
//   data:{
//     content:'state changes are made with backend',
//     important:false,
//     id: 2
//   }
// })

const store = createStore(noteReducer)

  ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>,
  document.getElementById('root')
  )
