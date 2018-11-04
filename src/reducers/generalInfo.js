const initialInfo = {
  city: '',
  defaultUsers: [
    {
      name: 'Javier Constain',
      hash: 1245,
      username: 'javier',
      city: 'cali'
    },
    {
      name: 'Eduardo Gutierrez',
      hash: 1245,
      username: 'eduardo',
      city: 'cali'
    }
  ]
}

export default (state=initialInfo, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return {...state, city: action.city}
    default:
      return state
  }
}
