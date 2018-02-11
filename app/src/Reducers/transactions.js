const transactions = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TRANSACTION':
        return [
          ...state,
          action.transaction
      ]
      default:
        return state
    }
  }
  
export default transactions
