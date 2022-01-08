const initialNotes = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id:1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id:2,
  },
]

const noteReducer = (state=initialNotes,action)=>{
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
    default:
      return state
  }
}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: generateId()
    }
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
    