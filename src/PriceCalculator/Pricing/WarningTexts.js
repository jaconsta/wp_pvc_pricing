import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

const cielo = `Nuestro exclusivo filtro UV evita decoloración del cielo raso |
  Contamos con la prueba química SGS para proteger su salud |
  Fácil instalación y limpieza, libre de mantenimiento |
  No necesita pintura para la instalación, ni en el futuro |
  Larga durabilidad, por su resistencia y calidad del material |
  Material auto extinguible, No tóxico y libre de plomo |
  Soporta el ataque de insectos y plagas como el comején |
  Aislante térmico, acústico y eléctrico |
  Permite combinación con materiales como aluminio y vidrio |
  Desmontable y reutilizable |
`

const pared = `
  Fácil instalación y limpieza, libre de mantenimiento |
  Larga durabilidad, por su resistencia y calidad del material |
  Material auto extinguible, No tóxico y libre de plomo |
  Soporta el ataque de insectos y plagas como el comején |
`

const piso = `
  Larga durabilidad por su resistencia y calidad del material |
  No necesita pegamento ni estructura para su instalación |
  Fácil limpieza - libre de mantenimiento |
  Cuenta con textura Antideslizante |
  Apariencia altamente fiel a superficies como la madera |
  Material auto extinguible, No tóxico y libre de plomo |
  Resistente al agua y altas temperaturas |
  Soporta el ataque de insectos y plagas como el comején |
  Extenso uso desde hogares hasta oficinas de trabajo 1
  Apto para alto tráfico - Desmontable y reutilizable |
`

const warnings = {
  cielo: cielo.split('|'),
  pared: pared.split('|'),
  piso: piso.split('|')
}

const warningStyle = {
  columnCount: 2,
  listStyleType: 'none',
  fontSize: '12px',
  backgroundColor: 'lightgray',
  margin: '2px 10px',
  padding: '10px 15px'
}

const WarningTexts = ({category}) => {
  const categoryWarnings = _.get(warnings, category)
  if (_.isNil(categoryWarnings)) return null
  return (
    <ul style={warningStyle}>
      {_.map(categoryWarnings, (warning) => (<li>{warning}</li>))}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  category: state.pricingInput.category
})

export default connect(mapStateToProps)(WarningTexts)
