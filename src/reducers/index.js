import { combineReducers } from 'redux'
import unitPrices from './unitPrices'
import generalInfo from './generalInfo'
import pricingInput from './pricingInput'

const pricingApp = combineReducers({
  generalInfo,
  unitPrices,
  pricingInput
})

export default pricingApp
