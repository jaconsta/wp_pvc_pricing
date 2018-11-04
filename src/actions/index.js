// Action types
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_VOLUME = 'SET_VOLUME'
export const RESET_PRICING_INPUT = 'RESET_PRICING_INPUT'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SET_CITY = 'SET_CITY'

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
