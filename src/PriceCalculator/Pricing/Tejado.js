import React from 'react'
import { connect } from 'react-redux'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'

import PricingTableCell from './PricingTableCell'

import { roofPricing, getTotal } from '../../modules/roofCalculator'
import { moneyFormat } from '../../modules/formatting'

import pvc_icon from '../../static/images/pvc_icon.png'

class TejadoPricing extends React.Component {
  renderTableHeader () {
    return (
      <TableHead>
        <TableRow>
          <PricingTableCell>Producto</PricingTableCell>
          <PricingTableCell>Precio unitario</PricingTableCell>
          <PricingTableCell>Cantidad</PricingTableCell>
          <PricingTableCell>Costo</PricingTableCell>
        </TableRow>
      </TableHead>
    )
  }

  renderTableContent (pricing) {
    const {tejas, caballete, tornillo} = pricing
    const bodystyle = {background: `url(${pvc_icon})`}
    return (
      <TableBody style={bodystyle}>
        <TableRow>
          <PricingTableCell>Teja 5.8 x 1.13m</PricingTableCell>
          <PricingTableCell>$ 155,000</PricingTableCell>
          <PricingTableCell>{tejas.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(tejas.costo)}</PricingTableCell>
        </TableRow>
        <TableRow>
          <PricingTableCell>Caballete 1.13 m de ancho</PricingTableCell>
          <PricingTableCell>$ 22,500</PricingTableCell>
          <PricingTableCell>{caballete.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(caballete.costo)}</PricingTableCell>
        </TableRow>
        <TableRow>
          <PricingTableCell>Tornillo especial</PricingTableCell>
          <PricingTableCell>$ 1,500</PricingTableCell>
          <PricingTableCell>{tornillo.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(tornillo.costo)}</PricingTableCell>
        </TableRow>
      </TableBody>
    )
  }

  renderTotals(pricing) {
    const total = getTotal(pricing)
    return (
      <TableFooter>
        <TableRow>
          <PricingTableCell></PricingTableCell><PricingTableCell></PricingTableCell>
          <PricingTableCell>Total</PricingTableCell>
          <PricingTableCell>{moneyFormat(total)}</PricingTableCell>
        </TableRow>
      </TableFooter>
    )
  }

  render () {
    if (this.props.category !== 'tejas') return null

    const {width, depth, waterfalls, unitPrices} = this.props
    const {teja, caballete, tornillo} = unitPrices
    const pricing = roofPricing(teja, caballete, tornillo)(width, depth, waterfalls)

    return (
      <div>
        <Table>
          {this.renderTableHeader()}
          {this.renderTableContent(pricing)}
          {this.renderTotals(pricing)}
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { category, width, depth, waterfalls } = state.pricingInput
  return {
    category,
    width,
    depth,
    waterfalls,
    unitPrices: state.unitPrices[state.generalInfo.city]['tejado'],
  }
}

export default connect(mapStateToProps)(TejadoPricing)
