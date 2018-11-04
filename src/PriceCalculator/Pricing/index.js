import React from 'react'
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import generatePricingPdf from '../../modules/generatePricingPdf'
import PricingTitle from './PricingTitle'
import CieloRasoPricing from './CieloRaso'
import TejadoPricing from './Tejado'
import ParedPricing from './Pared'
import PisoPricing from './Piso'
import WarningTexts from './WarningTexts'
import CategoryImages from './CategoryImages'

import pvc_logo from '../../static/images/pvc_logo.png'

const pricesWarning = 'Las cantidades de productos deben ser verificadas por su instalador'

class Pricing extends React.Component {
  isEmpty(obj) {return Object.keys(obj).length < 1}

  renderTotalArea () {
    const {width, depth} = this.props

    const totalArea = width * depth
    const totalStyle = {
      border: '2px solid black',
      padding: '10px',
      margin: '20px',
      width: '200px',
    }
    return (
      <div style={totalStyle}>
        <div style={{fontWeight: 'bold'}}>Area construcción</div>
        <div>Fondo <span>{depth} m</span></div>
        <div>Ancho <span>{width} m</span></div>
        <div>TOTAL <span>{totalArea.toFixed(1)} m/2</span></div>
      </div>
    )
  }
  renderPricingDate () {
    return (
      <div style={{padding: '20px 15px'}}>
        <span style={{fontWeight: 'bold'}}>Fecha:</span>
        {(new Date()).toDateString()}
      </div>
    )
  }

  render () {
    const {width, depth} = this.props
    if ((width + depth)<=0) return null

    const paperStyle = {
      width: '750px',
      marginLeft: '60px',
      marginTop: '20px'
    }
    return (
      <Paper style={paperStyle} id="printArea">
        <div style={{display: 'flex'}}>
          <img style={{padding: '15px 10px'}} src={pvc_logo}  alt='pvc_logo' />
          <div style={{flexGrow: 1}}>
            <h2 style={{fontSize: '24px', paddingTop: '20px', textAlign:'center', fontWeight: 'bold'}}>Cotización</h2>
            <PricingTitle />
          </div>
          {this.renderPricingDate()}
        </div>
        <div style={{display: 'flex'}}>
          {this.renderTotalArea()}
          <CategoryImages />
        </div>
        <CieloRasoPricing />
        <TejadoPricing />
        <ParedPricing />
        <PisoPricing />
        <div style={{textAlign: 'right', fontSize: '12px'}}>{pricesWarning}</div>
        <WarningTexts />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={generatePricingPdf}
          data-html2canvas-ignore="true"
        >
          Descarga
        </Button>
      </Paper>
    )
  }
}



const mapStateToProps = (state) => {
  const { width, depth } = state.pricingInput
  return {
    width,
    depth,
  }
}

export default connect(mapStateToProps)(Pricing)
