const prices = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRICE':
      return [
        ...state,
        action.price
    ]
    default:
      return state
  }
}

export default prices