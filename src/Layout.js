import React from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'

import Login from './Login'
import Categories from './PriceCalculator/Categories'
import Volumes from './PriceCalculator/Volumes'
import Pricing from './PriceCalculator/Pricing'
import { setCategory, setVolume, resetPricingInput } from './actions'

class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      category: null,
      volume: {}
    }
  }

  categorySelected = (category) => {
    this.props.dispatch(setCategory(category))
  }

  setVolume = (volume) => {
    this.props.dispatch(setVolume(volume))
  }

  reset = () => {
    this.props.dispatch(resetPricingInput())
  }

  renderLogin () {
    const { userCity } = this.props
    if (userCity !== '') return null
    return <Login />
  }

  renderPricingFlow () {
    const { userCity } = this.props
    if (userCity === '') return null
    return (
      <div>
        <Categories categorySelected={this.categorySelected}/>
        <Volumes setVolume={this.setVolume}/>
        <Pricing/>
        <br />
        <Button color="secondary" size="small" onClick={this.reset}>Comenzar de nuevo</Button>
      </div>
    )
  }

  render () {
    return (
      <div>
        { this.renderLogin() }
        { this.renderPricingFlow()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userCity: state.generalInfo.city
})

export default connect(mapStateToProps)(Layout)
