const fishes = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_FISHES':
      return action.fishes
    default:
      return state
  }
}

export default fishes