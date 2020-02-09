const initialState = [
  [2,3,234,3,4,6,7],
  [2,3,0,3,4,6,7],
  [2,3,0,3,4,6,7],
  [2,3,0,3,4,6,7],
  [2,3,0,3,4,6,7]
]

const table = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TABLE':
      if (action.table.length > 0) {
        return action.table
      } else {
        return state
      }
    default:
      return state
  }
}

export default table