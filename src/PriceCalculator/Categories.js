import React from 'react'

export default class Categories extends React.Component {
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
    // this.setState({category: null})
  }

  submitCategory = (e) => {
    const category = e.target.value
    this.setState({category})
  }

  render () {
    const {category} = this.state
    return (
      <div>
        <h2>1. Categoría</h2>
        <form onSubmit={this.handleDefault}>
          <label>
            <input type="radio" name="gender" value="cielo" onChange={this.submitCategory} checked={category === 'cielo'} />
            Cielo raso
          </label>
          <label>
            <input type="radio" name="gender" value="tejas" onChange={this.submitCategory} checked={category === 'tejas'} />
            Tejas
          </label>
          <label>
            <input type="radio" name="gender" value="pared" onChange={this.submitCategory} checked={category === 'pared'} />
            Pared
          </label>
          <label>
            <input type="radio" name="gender" value="piso" onChange={this.submitCategory} checked={category === 'piso'} />
            Piso
          </label>

          <button> Seleccionar</button>

        </form>
      </div>
    )
  }
}
