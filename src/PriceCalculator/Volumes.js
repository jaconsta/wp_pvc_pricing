import React from 'react'

export default class Volumes extends React.Component {
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

  setValue = type => e => {
    this.setState({[type]: e.target.value})
  }

  renderWaterfalls () {
    if (this.props.category !== 'tejas') return null
    return (
      <label>
        Caídas de agua.
        <select value={this.state.waterfalls} onChange={this.setValue('waterfalls')}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </label>
    )
  }

  renderError() {
    const {error} = this.state
    if (error === false) return null
    return (
      <p>
        No se puede continuar: <br />
        Los valores solo pueden ser números
      </p>
    )
  }

  render () {
    if (this.props.category===null) return null
    
    return (
      <div>
        <hr />
        <h2>2. Área de construcción</h2>
        <form onSubmit={this.handleDefault}>
          <label>
            ANCHO
            <input type="text" onChange={this.setValue('width')} />
          </label>
          <br />
          <label>
            FONDO
            <input type="text" onChange={this.setValue('depth')} />
          </label>
          <br />
          {this.renderWaterfalls()}   
          <br />
          <label>
            <button>calcular</button>
          </label>
        </form>
        {this.renderError()}
      </div>
    )
  }
}