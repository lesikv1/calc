let nextId = 0
export const setTable = (arr = []) => ({
  type: 'SET_TABLE',
  table: arr,
  id: nextId++
})

export const setCompare = ({number}) => ({
  type: 'SET_COMPARE',
  number
})

export const setPersent = ({type, index, value}) => ({
  type: 'SET_PERSENT',
  payload: {
    type,
    index,
    value
  }
})
