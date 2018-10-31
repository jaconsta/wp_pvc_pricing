import React from 'react'

import { wallPricing } from '../../modules/wallCalculator'
import { moneyFormat } from '../../modules/formatting'
import pvc_logo from '../../static/images/pvc_logo.png'
import pared_bg from '../../static/images/pared_bg.png'
import pared_chart from '../../static/images/pared_chart.png'
import pared_cuadros from '../../static/images/pared_cuadros.png'
import pared_flores from '../../static/images/pared_flores.png'
import pared_ondas from '../../static/images/pared_ondas.png'


export default class ParedPricing extends React.Component {
  constructor (props) {
    super(props)
    
    const {cali: {pared}} = precios // eslint-disable-line 
    this.state = {
      ...pared,
      pricing: {cantidad:0, costo: 0}
    }
  }

  componentDidMount () {
    const {metros} = this.state
    const {width, depth} = this.props.volume

    const pricing = wallPricing(metros)(width, depth)
    this.setState({pricing})
  }

  renderTableContent () {
    const {metros, pricing} = this.state

    return (
      <tbody>
        <tr>
          <td>Metros cuadrados incluido desperdicio</td>
          <td>{pricing.cantidad}</td>
        </tr>
        <tr>
          <td>Costo por metro cuadrado</td>
          <td>{moneyFormat(metros)}</td>
        </tr>
      </tbody>
    )
  }

  renderTotals() {
    const {pricing} = this.state
    return (
      <tfoot>
        <tr>
          <td>TOTAL IVA incluido</td>
          <td>{moneyFormat(pricing.costo)}</td>
        </tr>
      </tfoot>
    )
  }

  render () {
    if (this.props.category !== 'pared') return null
    return (
      <div>
        <img src={pvc_logo}  alt='pvc_logo' />
        <img src={pared_chart}  alt='pared_chart' />
        <table>
          {this.renderTableContent()}
          {this.renderTotals()}
        </table>
        <img src={pared_bg}  alt='pared_bg' />
        <img src={pared_cuadros}  alt='pared_cuadros' />
        <img src={pared_flores}  alt='pared_flores' />
        <img src={pared_ondas}  alt='pared_ondas' />
      </div>
    )
  }

}
