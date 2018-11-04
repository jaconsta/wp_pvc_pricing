import React from 'react'
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'


class Volumes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      width: null,
      depth: null,
      waterfalls: 1,
      error: false
    }
  }

  parseVolumeForms = () => {
    return ['width', 'depth', 'waterfalls'].reduce((orig, prop) => {
      const propNumber = Number(this.state[prop])
      if (Number.isNaN(propNumber)) throw `Invalid field: ${prop}`
      return Object.assign(orig, {[prop]: propNumber})
    }, {})
  }

  handleDefault = e => {
    e.preventDefault()
    try {
      const volumeValues = this.parseVolumeForms()
      this.props.setVolume(volumeValues)
      this.setState({error: false})
    } catch (e) {
      this.setState({error: true})
    }

  }

  setValue = (type) => e => {
    this.setState({[type]: e.target.value})
  }

  renderWaterfalls () {
    if (this.props.category !== 'tejas') return null
    /*
    <select value={this.state.waterfalls} onChange={this.setValue('waterfalls')}>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
*/
    return (
      <FormControl margin="normal" style={{width: '300px'}}>
        <InputLabel htmlFor="waterfalls">Caídas de agua.</InputLabel>
          <Select
              value={this.state.waterfalls}
              onChange={this.setValue('waterfalls')}
              inputProps={{
                name: 'waterfalls',
                id: 'waterfalls',
              }}
            >

            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
      </FormControl>
    )
  }

  renderError() {
    const {error} = this.state
    if (error === false) return null
    return (
      <div style={{display: 'flex'}}>
        No se puede continuar: <br />
        Los valores solo pueden ser números
      </div>
    )
  }

  render () {
    const {category, width, depth} = this.props
    if (category==='') return null

    return (
      <ExpansionPanel expanded={(width + depth) <= 0}>
        <ExpansionPanelSummary>2. Área de construcción {width} x {depth}</ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form onSubmit={this.handleDefault}>
            <FormControl margin="normal"  style={{width: '300px', display: 'flex'}}>
              <TextField label="ANCHO" type="text"onChange={this.setValue('width')} />
            </FormControl>
            <FormControl margin="normal"  style={{width: '300px', display: 'flex'}}>
              <TextField label="FONDO" type="text"onChange={this.setValue('depth')} />
            </FormControl>
            {this.renderWaterfalls()}
            <Button style={{width: '300px', display: 'flex'}} variant="contained" color="primary" type='submit'>calcular</Button>
          </form>
          {this.renderError()}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

const mapStateToProps = state => ({
  category: state.pricingInput.category,
  width: state.pricingInput.width,
  depth: state.pricingInput.depth
})

export default connect(mapStateToProps)(Volumes)
