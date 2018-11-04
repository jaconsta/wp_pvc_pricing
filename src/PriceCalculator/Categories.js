import React from 'react'
import { connect } from 'react-redux'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'

class Categories extends React.Component {
  constructor (props)  {
    super(props)
    this.state = {
      category: null
    }
  }

  handleDefault = (e) => {
    const { category } = this.state
    e.preventDefault()
    if (category === null) return
    this.props.categorySelected(category)
    this.setState({category: null})
  }

  submitCategory = (e) => {
    const category = e.target.value
    this.setState({category})
  }

  renderOptions ([value, text]) {
    return (
      <FormControlLabel key={value}
        value={value}
        control={<Radio
        />}
        label={text}
      />
    )
  }

  render () {
    const options = [
      ['cielo', 'Cielo raso'],
      ['tejas', 'Tejas'],
      ['pared', 'Pared'],
      ['piso', 'Piso']
    ]
    return (
      <ExpansionPanel expanded={this.props.category===''}>
        <ExpansionPanelSummary>1. Categoría {this.props.category}</ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form onSubmit={this.handleDefault}>
            <RadioGroup
              row
              name="category"
              value={this.state.category}
              onChange={this.submitCategory}
            >
            {options.map(this.renderOptions)}
            </RadioGroup>
            <Button variant="contained" color="primary" size="small" type='submit'> Seleccionar</Button>
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

const mapStateToProps = state => ({
  category: state.pricingInput.category
})

export default connect(mapStateToProps)(Categories)
