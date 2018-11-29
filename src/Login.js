import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'

import { setCity, getPrices } from './actions'


const defaultState = {
  user: '',
  password: '',
  error: ''
}

class Login extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      ...defaultState
    }
  }

  handleChange = (field) => (e) => {
    this.setState({[field]: e.target.value})
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    const { user, password } = this.state

    const currentUser = _.find(this.props.currentUsers, {username: user})
    if (_.isEmpty(currentUser)){
      this.setState({error: 'Datos incorrectos'})
      return
    }

    this.props.dispatch(setCity(currentUser))
    this.props.dispatch(getPrices(currentUser))
    this.setState(defaultState)
  }

  renderError () {
    const { error } = this.state
    if (_.isNil(error)) return null
    return <p style={{color: 'red'}}>{error}</p>
  }

  render () {
    return (
      <div style={{paddingTop: '30px', paddingLeft: '50px', maxWidth: '500px', width: '100%'}}>
        <Paper>
          <h1 style={{paddingTop: '15px', paddingLeft: '10px'}}>Ingresa tus credenciales </h1>
          <form
            onSubmit={this.handleLoginSubmit}
            style={{marginLeft: '15px', marginRight: '15px', paddingBottom: '10px'}}
          >
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="user">Usuario</InputLabel>
              <Input
                id="user"
                name="user"
                value={this.state.user}
                onChange={this.handleChange('user')}
                autoComplete="user"
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Clave</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleChange('password')}
              />
            </FormControl>
            {this.renderError()}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{marginTop: '20px'}}
            >
              Comenzar
            </Button>
          </form>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    currentUsers: state.generalInfo.defaultUsers
})
export default connect(mapStateToProps)(Login)
