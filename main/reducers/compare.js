const initialState = {
    number: 0,
    status: false
}

const compare = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COMPARE':
        return action.compare
      default:
        return state
    }
  }
  
  export default compare