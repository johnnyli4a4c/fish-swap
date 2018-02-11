/*
 * action creators
 */
export const addPrice = price => {
  return {
    type: 'ADD_PRICE',
    price: price
  }
}

export const addTransaction = transaction => {
  return {
    type: 'ADD_TRANSACTION',
    transaction: transaction
  }
}
