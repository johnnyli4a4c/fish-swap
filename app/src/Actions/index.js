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

export const addNewTransaction = (data) => {
  console.log(data)
  return dispatch => {
    dispatch(addTransaction);
    return axios.post(route('/transactions', data))
      .then(
        response => {
          console.log(response)
          // dispatch(authenticate(response.data));
        },
        error => {
          // console.log(error);
        }
      )
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

export const authenticateUser = (data) => {
  console.log(data)
  let newData = JSON.stringify({
    phoneNumber: data.phoneNumber,
    password: data.password
  })
  return dispatch => {
    dispatch(authenticate);
    return axios.post(route('/login', newData, {
      headers: {
        'Content-Type': 'application/json',
    }}))
      .then(
        response => {
          console.log(response)
          // dispatch(authenticate(response.data));
        },
        error => {
          // console.log(error);
        }
      )
  };
}

export const authenticate = login => {
  return {
    type: "AUTHENTICATE",
    login
  }
}
