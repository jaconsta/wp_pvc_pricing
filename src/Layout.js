import React from 'react'
import Categories from './PriceCalculator/Categories'
import Volumes from './PriceCalculator/Volumes'
import Pricing from './PriceCalculator/Pricing'

export default class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      category: null,
      volume: {}
    }
  }

  categorySelected = (category) => {
    this.setState({category, volume: {}})
  }

  setVolume = (volume) => {
    this.setState({volume})
  }

  render () {

    return (
      <div>
        <Categories categorySelected={this.categorySelected}/>
        <br />
        <Volumes category={this.state.category} setVolume={this.setVolume}/>
        <br />
        <Pricing volume={this.state.volume} category={this.state.category}/>
        <br />
      </div>
    )
  }
}