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
    default:
      return state
  }
}

module.exports = noteReducer


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
    