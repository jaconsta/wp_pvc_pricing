import React from 'react'

import { roofPricing, getTotal } from '../../modules/roofCalculator'
import { moneyFormat } from '../../modules/formatting'
import pvc_logo from '../../static/images/pvc_logo.png'
import tejas_color from '../../static/images/tejas_color.png'
import tejas_caballetes from '../../static/images/tejas_caballetes.png'
import tejas_tornillos from '../../static/images/tejas_tornillos.png'

export default class TejadoPricing extends React.Component {
  constructor (props) {
    super(props)
    
    const {cali: {tejado}} = precios // eslint-disable-line 
    this.state = {
      ...tejado,
      pricing: {
        tejas: {cantidad:0, costo: 0},
        caballete: {cantidad:0, costo: 0},
        tornillo: {cantidad:0, costo: 0},
      }
    } 
  }

  componentDidMount () {
    const {teja, caballete, tornillo} = this.state
    const {width, depth, waterfalls} = this.props.volume

    const pricing = roofPricing(teja, caballete, tornillo)(width, depth, waterfalls)
    this.setState({pricing})
  }

  renderTableHeader () {
    return (
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio unitario</th>
          <th>Cantidad</th>
          <th>Costo</th>
        </tr>
      </thead>
    )
  }

  renderTableContent () {
    const {tejas, caballete, tornillo} = this.state.pricing
    return (
      <tbody>
        <tr>
          <td>Teja 5.8 x 1.13m</td>
          <td>$ 155,000</td>
          <td>{tejas.cantidad}</td>
          <td>{moneyFormat(tejas.costo)}</td>
        </tr>
        <tr>
          <td>Caballete 1.13 m de ancho</td>
          <td>$ 22,500</td>
          <td>{caballete.cantidad}</td>
          <td>{moneyFormat(caballete.costo)}</td>
        </tr>
        <tr>
          <td>Tornillo especial</td>
          <td>$ 1,500</td>
          <td>{tornillo.cantidad}</td>
          <td>{moneyFormat(tornillo.costo)}</td>
        </tr>
      </tbody>
    )
  }

  renderTotals() {
    const total = getTotal(this.state.pricing)
    return (
      <tfoot>
        <tr>
          <td></td><td></td>
          <td>Total</td>
          <td>{moneyFormat(total)}</td>
        </tr>
      </tfoot>
    )
  }

  render () {
    if (this.props.category !== 'tejas') return null
    return (
      <div>
        <img src={pvc_logo}  alt='pvc_logo' />
        <table>
          {this.renderTableHeader()}
          {this.renderTableContent()}
          {this.renderTotals()}
        </table>
        <img src={tejas_color} alt='tejas_color' />
        <img src={tejas_caballetes} alt='tejas_caballetes' />
        <img src={tejas_tornillos}  alt='tejas_tornillos' />
      </div>
    )
  }
}
