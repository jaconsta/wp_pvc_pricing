import React from 'react'
import { connect } from 'react-redux'

import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'

import {PricingTableCell, PricingTableBody} from './style'

import { floorPricing } from '../../modules/floorCalculator'
import { moneyFormat } from '../../modules/formatting'

import piso_lamina from '../../static/images/piso_lamina.png'

class PisoPricing extends React.Component {
  renderTableContent (pricing) {
    const {metros} = this.props.unitPrices
    return (
      <PricingTableBody>
        <TableRow>
          <PricingTableCell>Láminas de piso SPC</PricingTableCell>
          <PricingTableCell>{pricing.cantidad}</PricingTableCell>
        </TableRow>
        <TableRow>
          <PricingTableCell>Costo por lámina</PricingTableCell>
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
    if (this.props.category !== 'piso') return null

    const {width, depth, unitPrices} = this.props
    const {metros} = unitPrices

    const pricing = floorPricing(metros)(width, depth)

    return (
      <div>
        <Table>
          {this.renderTableContent(pricing)}
          {this.renderTotals(pricing)}
        </Table>
        <img style={{ width: '450px', paddingLeft: '140px'}} src={piso_lamina}  alt='piso_lamina' />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const { category, width, depth } = state.pricingInput
  return {
    category,
    width,
    depth,
    unitPrices: state.unitPrices[state.generalInfo.city]['piso'],
  }
}

export default connect(mapStateToProps)(PisoPricing)
