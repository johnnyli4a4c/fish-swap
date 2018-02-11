const sellers = (state = [], action) => {
    switch (action.type) {
      case 'LOAD_SELLERS':
        return action.sellers
      default:
        return state
    }
  }
  
export default sellers
