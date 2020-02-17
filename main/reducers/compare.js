const compare = (state = 0, action) => {
    switch (action.type) {
      case 'SET_COMPARE':
        return action.number
      default:
        return state
    }
  }
  
  export default compare