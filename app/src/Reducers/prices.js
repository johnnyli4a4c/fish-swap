const prices = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRICE':
      return [
        ...state,
        action.price
    ]
    case 'LOAD_PRICES':
      return action.prices
    default:
      return state
  }
}

export default prices