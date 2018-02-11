const countries = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_COUNTRIES':
      return action.countries
    default:
      return state
  }
}

export default countries