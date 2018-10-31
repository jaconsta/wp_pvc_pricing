import React from 'react'

export default class PisoPricing extends React.Component {
  renderTableContent () {
    return (
      <tbody>
        <tr>
          <td>Láminas de piso SPC</td>
          <td>n</td>
        </tr>
        <tr>
          <td>Costo por lámina</td>
          <td>$ 60.000</td>
        </tr>
      </tbody>
    )
  }

  renderTotals() {
    return (
      <tfoot>
        <tr>
          <td>TOTAL IVA incluido</td>
          <td>$$$</td>
        </tr>
      </tfoot>
    )
  }

  render () {
    if (this.props.category !== 'piso') return null
    return (
      <table>
        {this.renderTableContent()}
        {this.renderTotals()}
      </table>
    )
  }

}
