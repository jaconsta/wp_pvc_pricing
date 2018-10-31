import React from 'react'

import CieloRasoPricing from './CieloRaso'
import TejadoPricing from './Tejado'
import ParedPricing from './Pared'
import PisoPricing from './Piso'

export default class Pricing extends React.Component {
  isEmpty(obj) {return Object.keys(obj).length < 1}
  
  renderTotalArea () {
    const {volume} = this.props
    const {width, depth} = volume

    const totalArea = width * depth

    return (
      <div>
        <br />
        Total metros cuadrados: {totalArea}
        <br /><br />
      </div>
    )
  }

  render () {
    const {volume, category} = this.props
    if (this.isEmpty(volume)) return null

    const pricingProps = {
      category,
      volume
    }
    return (
      <div>
        <hr />
        <h2>Cotización</h2>
        {this.renderTotalArea()}
        <CieloRasoPricing {...pricingProps} />
        <TejadoPricing {...pricingProps} />
        <ParedPricing {...pricingProps} />
        <PisoPricing {...pricingProps} />
      </div>
    )
  }
}
