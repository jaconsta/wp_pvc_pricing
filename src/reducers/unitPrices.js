const initialUnitPrices = {
  cali: {
    tejado: {teja: 155000, caballete: 22500, tornillo: 1500},
    pared: { metros: 60000 },
    cielo: { lamina: 30000, perimetral: 14000, vigueta: 2700, omega: 2700,
      angulo: 1700, torniStruct: 40, torniLami: 35},
    piso: { metros: 11313 }
  }
}

export default (state=initialUnitPrices, action) => {
  switch (action.type) {
    case 'SET_UNIT_PRICES':
      return action.unitPrices
    default:
      return state
  }
}
