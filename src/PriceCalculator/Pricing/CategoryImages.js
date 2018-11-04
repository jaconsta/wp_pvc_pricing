import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

import cielo_lamina from '../../static/images/cielo_lamina.jpg'
import cielo_perimetral from '../../static/images/cielo_perimetral.jpg'
import cielo_vigueta from '../../static/images/cielo_vigueta.jpg'
import pared_cuadros from '../../static/images/pared_cuadros.png'
import pared_flores from '../../static/images/pared_flores.png'
import pared_ondas from '../../static/images/pared_ondas.png'
import tejas_color from '../../static/images/tejas_color.png'
import tejas_caballetes from '../../static/images/tejas_caballetes.png'
import tejas_tornillos from '../../static/images/tejas_tornillos.png'

const imgStyle = {width: '150px'}

const cielo = [
  <img key={0} style={imgStyle} src={cielo_lamina}  alt='cielo_lamina' />,
  <img key={1} style={imgStyle} src={cielo_perimetral}  alt='cielo_perimetral' />,
  <img key={2} style={imgStyle} src={cielo_vigueta}  alt='cielo_vigueta' />
]

const pared = [
  <img key={0} style={imgStyle} src={pared_cuadros}  alt='pared_cuadros' />,
  <img key={1} style={imgStyle} src={pared_flores}  alt='pared_flores' />,
  <img key={2} style={imgStyle} src={pared_ondas}  alt='pared_ondas' />
]

const tejas = [
  <img key={0} style={imgStyle} src={tejas_color} alt='tejas_color' />,
  <img key={1} style={imgStyle} src={tejas_caballetes} alt='tejas_caballetes' />,
  <img key={2} style={imgStyle} src={tejas_tornillos}  alt='tejas_tornillos' />
]

const images = {
  cielo,
  pared,
  tejas
}

const CategoryImages = ({category}) =>{
  const categoryImages = _.get(images, category)
  if (_.isNil(categoryImages)) return null
  return (
    <div>
     {_.map(categoryImages, category => (category))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  category: state.pricingInput.category
})

export default connect(mapStateToProps)(CategoryImages)
