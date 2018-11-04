import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

const categoryStyle = {
  textAlign: 'center',
  color: '#0091EA',
  fontSize: '32px'
}

const tejas = 'Tejado en PVC'
const cielo = 'Cielo Raso en PVC'
const pared = 'Pared 3D'
const piso = 'Piso laminado SPC'
const title = {
  tejas,
  cielo,
  pared,
  piso
}

const PricingTitle = ({category}) => {
  const categoryTitle = _.get(title, category)
  if (_.isNil(categoryTitle)) return null
  return (<div style={categoryStyle}>{categoryTitle}</div>)
}

const mapStateToProps = (state) => ({
  category: state.pricingInput.category
})

export default connect(mapStateToProps)(PricingTitle)
