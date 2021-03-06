import noteService from "../services/notes"

const noteReducer = (state=[],action)=>{
    switch(action.type){
      case 'NEW_NOTE':
        // return state.concat(action.data)
        return [...state, action.data]
      case 'TOGGLE_IMPORTANCE':{
        const id = action.data.id
        const noteToChange = state.find(n => n.id === id)
        const changedNote = {
          ...noteToChange,
          important: !noteToChange.important
        }
        return state.map(note => 
          note.id !== id ? note : changedNote
          )
    }
    case 'INIT_NOTES':
      return action.data
    default:
      return state
  }
}

export const initializeNotes = () => {
    return async dispatch => {
      const notes = await noteService.getAll()
      dispatch({
      type: 'INIT_NOTES',
      data: notes,
    })
  }
}

export const createNote = (content) => {
  return async dispatch => {
    const newNote = await noteService.createNew(content)
  dispatch({
    type: 'NEW_NOTE',
    data: newNote,
  })
}
}

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}

export default noteReducer

/* Array Spread Method
const number = [1,2,3]
console,log([...number,4,5])
// [1,2,3,4,5]
console,log([number,4,5])
// [[1,2,3],4,5]
const numbers = [1,2,3,4,5,6]
const [first,second....rest] = numbers
console.log(first)//1
console.log(second)//2
console.log(rest)//[3,4,5,6]
*/
    