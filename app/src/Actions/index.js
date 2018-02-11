import axios from 'axios';
const BASE_URL = 'http://35.182.135.102:8080';
const route = path => { return BASE_URL + path};
/*
 * action creators
 */
export const addPrice = price => {
  return {
    type: 'ADD_PRICE',
    price: price
  }
}

export const requestTransactions = () => {
  return {
    type: 'REQUEST_TRANSACTIONS'
  }
}

export const fetchTransactions = () => {
  return dispatch => {
    dispatch(requestTransactions);
    return axios.get(route('/transaction'))
      .then(
        response => {
          dispatch(loadTransactions(response.data));
        },
        error => {
          console.log(error);
        }
      )
  };
}

export const loadTransactions = transactions => {
  return {
    type: "LOAD_TRANSACTIONS",
    transactions
  };
}

export const addTransaction = transaction => {
  return {
    type: 'ADD_TRANSACTION',
    transaction: transaction
  }
}

export const requestPrices = () => {
  return {
    type: 'REQUEST_PRICES'
  }
}

export const fetchPrices = () => {
  return dispatch => {
    dispatch(requestPrices);
    return axios.get(route('/prices'))
      .then(
        response => {
          dispatch(loadPrices(response.data));
        },
        error => {
          console.log(error);
        }
      )
  };
}

export const loadPrices = prices => {
  return {
    type: "LOAD_PRICES",
    prices
  };
}

export const requestCountries = () => {
  return {
    type: 'REQUEST_COUNTRIES'
  }
}

export const fetchCountries = () => {
  return dispatch => {
    dispatch(requestCountries);
    return axios.get(route('/country'))
      .then(
        response => {
          dispatch(loadCounties(response.data));
        },
        error => {
          console.log(error);
        }
      )
  };
}

export const loadCounties = countries => {
  return {
    type: "LOAD_COUNTRIES",
    countries
  };
}

export const requestFishes = () => {
  return {
    type: 'REQUEST_FISHES'
  }
}

export const fetchFishes = () => {
  return dispatch => {
    dispatch(requestFishes);
    return axios.get(route('/fish'))
      .then(
        response => {
          dispatch(loadFishes(response.data));
        },
        error => {
          console.log(error);
        }
      )
  };
}

export const loadFishes = fishes => {
  return {
    type: "LOAD_FISHES",
    fishes
  };
}

export const requestBuyers = () => {
  return {
    type: 'REQUEST_BUYERS'
  }
}

export const fetchBuyers = () => {
  return dispatch => {
    dispatch(requestBuyers);
    return axios.get(route('/buyer'))
      .then(
        response => {
          dispatch(loadBuyers(response.data));
        },
        error => {
          console.log(error);
        }
      )
  };
}

export const loadBuyers = buyers => {
  return {
    type: "LOAD_BUYERS",
    buyers
  };
}

export const requestSellers = () => {
  return {
    type: 'REQUEST_SELLERS'
  }
}

export const fetchSellers = () => {
  return dispatch => {
    dispatch(requestSellers);
    return axios.get(route('/seller'))
      .then(
        response => {
          dispatch(loadSellers(response.data));
        },
        error => {
          console.log(error);
        }
      )
  };
}

export const loadSellers = sellers => {
  return {
    type: "LOAD_SELLERS",
    sellers
  };
}
