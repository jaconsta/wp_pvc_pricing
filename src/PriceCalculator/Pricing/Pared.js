import React from 'react'
import { connect } from 'react-redux'

import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'

import {PricingTableCell, PricingTableBody} from './style'

import { wallPricing } from '../../modules/wallCalculator'
import { moneyFormat } from '../../modules/formatting'

import pared_bg from '../../static/images/pared_bg.png'
import pared_chart from '../../static/images/pared_chart.png'


class ParedPricing extends React.Component {
  renderTableContent (pricing) {
    const {metros} = this.props.unitPrices

    return (
      <PricingTableBody>
        <TableRow>
          <PricingTableCell>Metros cuadrados incluido desperdicio</PricingTableCell>
          <PricingTableCell>{pricing.cantidad}</PricingTableCell>
        </TableRow>
        <TableRow>
          <PricingTableCell>Costo por metro cuadrado</PricingTableCell>
          <PricingTableCell>{moneyFormat(metros)}</PricingTableCell>
        </TableRow>
      </PricingTableBody>
    )
  }

  renderTotals(pricing) {
    return (
      <TableFooter>
        <TableRow>
          <PricingTableCell>TOTAL IVA incluido</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.costo)}</PricingTableCell>
        </TableRow>
      </TableFooter>
    )
  }

  render () {
    if (this.props.category !== 'pared') return null

    const {width, depth, unitPrices} = this.props
    const {metros} = unitPrices

    const pricing = wallPricing(metros)(width, depth)

    return (
      <div>
        <img src={pared_chart} style={{width: '70%', marginLeft: '15%'}} alt='pared_chart' />
        <Table>
          {this.renderTableContent(pricing)}
          {this.renderTotals(pricing)}
        </Table>
      </div>
    )
  }

}
//        <img src={pared_bg}  alt='pared_bg' />

const mapStateToProps = (state) => {
  const { category, width, depth } = state.pricingInput
  return {
    category,
    width,
    depth,
    unitPrices: state.unitPrices[state.generalInfo.city]['pared'],
  }
}

export default connect(mapStateToProps)(ParedPricing)
