import React from 'react'
import { connect } from 'react-redux'


import Table from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import {PricingTableCell, PricingTableBody} from './style'

import { getTotal, ceilingPricing } from '../../modules/ceilingCalculator'
import { moneyFormat } from '../../modules/formatting'

class CieloRasoPricing extends React.Component {
  renderTotals (pricing) {
    const totalClosure = getTotal(pricing)
    const totalOpen = totalClosure('abierto')
    const totalModular = totalClosure('modular')
    return (
      <TableFooter>
        <TableRow>
          <PricingTableCell colSpan='3'></PricingTableCell>
          <PricingTableCell>{moneyFormat(totalOpen)}</PricingTableCell><PricingTableCell></PricingTableCell>
          <PricingTableCell>{moneyFormat(totalModular)}</PricingTableCell>
        </TableRow>
      </TableFooter>
    )
  }
  renderTableContent (pricing) {
    const { lamina, perimetral, vigueta, omega, angulo, torniStruct, torniLami } = this.props.unitPrices
    return (
      <PricingTableBody>
        <TableRow>
          <PricingTableCell>Lámina cielo PVC 5.95m x 30cm</PricingTableCell>
          <PricingTableCell>{moneyFormat(lamina)}</PricingTableCell>
          <PricingTableCell>{pricing.lamina.abierto.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.lamina.abierto.costo)}</PricingTableCell>
          <PricingTableCell>{pricing.lamina.modular.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.lamina.modular.costo)}</PricingTableCell>
        </TableRow>
        <TableRow>
          <PricingTableCell>Perimetrales 5.95 largo</PricingTableCell>
          <PricingTableCell>{moneyFormat(perimetral)}</PricingTableCell>
          <PricingTableCell>{pricing.perimetral.abierto.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.perimetral.abierto.costo)}</PricingTableCell>
          <PricingTableCell>{pricing.perimetral.modular.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.perimetral.modular.costo)}</PricingTableCell>
        </TableRow>
        <TableRow>
          <PricingTableCell>Viguetas x 2.44m</PricingTableCell>
          <PricingTableCell>{moneyFormat(vigueta)}</PricingTableCell>
          <PricingTableCell>{pricing.vigueta.abierto.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.vigueta.abierto.costo)}</PricingTableCell>
          <PricingTableCell>{pricing.vigueta.modular.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.vigueta.modular.costo)}</PricingTableCell>
        </TableRow>
        <TableRow>
          <PricingTableCell>Omegas x 2.44m</PricingTableCell>
          <PricingTableCell>{moneyFormat(omega)}</PricingTableCell>
          <PricingTableCell>{pricing.omega.abierto.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.omega.abierto.costo)}</PricingTableCell>
          <PricingTableCell>{pricing.omega.modular.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.omega.modular.costo)}</PricingTableCell>
        </TableRow>
        <TableRow>
          <PricingTableCell>Ángulos x 2.44m</PricingTableCell>
          <PricingTableCell>{moneyFormat(angulo)}</PricingTableCell>
          <PricingTableCell>{pricing.angulo.abierto.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.angulo.abierto.costo)}</PricingTableCell>
          <PricingTableCell>{pricing.angulo.modular.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.angulo.modular.costo)}</PricingTableCell>
        </TableRow>
        <TableRow>
          <PricingTableCell>Tornillos para estructura</PricingTableCell>
          <PricingTableCell>{moneyFormat(torniStruct)}</PricingTableCell>
          <PricingTableCell>{pricing.torniStruct.abierto.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.torniStruct.abierto.costo)}</PricingTableCell>
          <PricingTableCell>{pricing.torniStruct.modular.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.torniStruct.modular.costo)}</PricingTableCell>
        </TableRow>
        <TableRow>
          <PricingTableCell>Tornillo para láminas</PricingTableCell>
          <PricingTableCell>{moneyFormat(torniLami)}</PricingTableCell>
          <PricingTableCell>{pricing.torniLami.abierto.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.torniLami.abierto.costo)}</PricingTableCell>
          <PricingTableCell>{pricing.torniLami.modular.cantidad}</PricingTableCell>
          <PricingTableCell>{moneyFormat(pricing.torniLami.modular.costo)}</PricingTableCell>
        </TableRow>
      </PricingTableBody>
    )
  }

  renderTableHeader () {
    return (
      <TableHead>
        <TableRow>
          <PricingTableCell>Producto</PricingTableCell>
          <PricingTableCell>Precios</PricingTableCell>
          <PricingTableCell>Cantidad</PricingTableCell>
          <PricingTableCell>Espacio abierto</PricingTableCell>
          <PricingTableCell>Cantidad</PricingTableCell>
          <PricingTableCell>Espacio modular</PricingTableCell>
        </TableRow>
      </TableHead>
    )
  }

  render () {
    if (this.props.category !== 'cielo') return null

    const {width, depth, unitPrices} = this.props
    const {
      lamina,
      perimetral,
      vigueta,
      omega,
      angulo,
      torniStruct,
      torniLami
    } = unitPrices

    const pricing = ceilingPricing(
      lamina,
      perimetral,
      vigueta,
      omega,
      angulo,
      torniStruct,
      torniLami
    )(width, depth)

    // const imgStyle = {width: '250px'}
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

/*
<img style={imgStyle} src={cielo_lamina}  alt='cielo_lamina' />
<img style={imgStyle} src={cielo_perimetral}  alt='cielo_perimetral' />
<img style={imgStyle} src={cielo_vigueta}  alt='cielo_vigueta' />
*/

const mapStateToProps = (state) => {
  const { category, width, depth } = state.pricingInput
  return {
    category,
    width,
    depth,
    unitPrices: state.unitPrices['cielo'],
  }
}

export default connect(mapStateToProps)(CieloRasoPricing)
