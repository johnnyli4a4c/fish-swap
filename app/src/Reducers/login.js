const login = (state = [], action) => {
    switch (action.type) {
      case 'AUTHENTICATE':
        return action.user
      default:
        return state
    }
  }
  
  export default login