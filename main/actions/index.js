let nextId = 0
export const setTable = (arr = []) => ({
  type: 'SET_TABLE',
  table: arr,
  id: nextId++
});

export const setCompare = ({number, status}) => ({
  type: 'SET_COMPARE',
  compare: {
    number,
    status
  }
});
