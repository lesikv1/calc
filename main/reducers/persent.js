const initialState = {
    type: null,
    index: null,
    value: null
}
  
  const persent = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PERSENT':
        return action.payload
      default:
        return state
    }
  }
  
  export default persent