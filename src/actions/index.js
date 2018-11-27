import firebase from 'firebase'

// Action types
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_VOLUME = 'SET_VOLUME'
export const RESET_PRICING_INPUT = 'RESET_PRICING_INPUT'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SET_CITY = 'SET_CITY'
export const SET_UNIT_PRICES = 'SET_UNIT_PRICES'

// const Post = new Firebase('https://pvc-pricing.firebaseio.com')

export const getPrices = ({city}) => {
  return dispatch => {
    const rootRef = firebase.database().ref().child('prices').child(city)
    rootRef.on('value', snap => {
      dispatch(setPrices(snap.val()))
    })
  }
}

export const setPrices = unitPrices => {
  return {
    type: SET_UNIT_PRICES,
    unitPrices
  }
}

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category
  }
}

export const setVolume = ({width, depth, waterfalls}) => {
  return {
    type: SET_VOLUME,
    width,
    depth,
    waterfalls
  }
}

export const resetPricingInput = () => {
  return {
    type: RESET_PRICING_INPUT
  }
}

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export const setCity = ({city}) => {
  return {
    type: SET_CITY,
    city
  }
}
