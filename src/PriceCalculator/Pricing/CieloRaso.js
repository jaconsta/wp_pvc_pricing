import React from 'react'

export default class CieloRasoPricing extends React.Component {
  renderTotals () {
    return (
      <tfoot>
        <tr>
          <td></td><td></td><td></td>
          <td>$$$</td><td></td>
          <td>$$$</td>
        </tr>
        <tr>
          <td></td><td></td>
          <td>MT/2</td>
          <td>000</td>
          <td>MT/2</td>
          <td>000</td>
        </tr>
      </tfoot>
    )
  }
  renderTableContent () {
    return (
      <tbody>
        <tr>
          <td>Lámina cielo PVC 5.95m x 30cm</td>
          <td>$ 30.000</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Perimetrales 5.95 largo</td>
          <td>$ 14.000</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Viguetas x 2.44m</td>
          <td>$ 2.700</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Omegas x 2.44m</td>
          <td>$ 2.700</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Ángulos x 2.44m</td>
          <td>$ 1.700</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Tornillos para estructura</td>
          <td>$ 40</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Tornillo para láminas</td>
          <td>$ 35</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    )
  }

  renderTableHeader () {
    return (
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precios</th>
          <th>Cantidad</th>
          <th>Espacio abierto</th>
          <th>Cantidad</th>
          <th>Espacio modular</th>
        </tr>
      </thead>
    )
  }
  render () {
    if (this.props.category !== 'cielo') return null
    return (
      <table>
        {this.renderTableHeader()}
        {this.renderTableContent()}
        {this.renderTotals()}
      </table>
    ) 
  }
}
