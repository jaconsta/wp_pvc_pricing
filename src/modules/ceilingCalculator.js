import { ceilHundreds } from './formatting'

export const ceilingPricing = (
  laminaUnitCost, perimetralUnitCost, viguetaUnitcost,
  omegaUnitCost, anguloUnitCost, torniStructUnitcost, torniLami
) => (width, depth) => {
  const perimeter = (width + depth) * 2
  const area = width * depth
  const lamina_1 = area / 1.785
  const viguetas_1 = width / 1.2
  const omegas_1 = width / 2.44

  const perimetrales_2 = perimeter / 5.95
  const viguetas_2 = depth / 2.44
  const omegas_2 = depth / 0.6

  const lamina_3 = lamina_1 * 1.07
  const perimetrales_3 = perimetrales_2 * 1.1
  const viguetas_3 = viguetas_1 * viguetas_2 * 1.1
  const omegas_3 = omegas_1 * omegas_2 * 1.1

  const laminaOpenQuantity = Math.ceil(lamina_3)
  const perimetralOpenQuantity = Math.ceil(perimetrales_3)
  const viguetaOpenQuantity = Math.ceil(viguetas_3)
  const omegaOpenQuantity = Math.ceil(omegas_3)

  const angulos_1 = viguetaOpenQuantity * 2 * 0.2 / 2.44
  const torniEstru_1 = viguetaOpenQuantity * 2 * 6
  const torniLami_1 = lamina_1 * 10

  const angulos_2 = perimeter / 2.44

  const angulos_3 = angulos_2 * 1.1 + angulos_1
  const torniEstru_3 = torniEstru_1 * 1.25
  const torniLami_3 = torniLami_1 * 1.25

  const anguloOpenQuantity = Math.ceil(angulos_3)
  const torniEstruOpenQuantity = ceilHundreds(torniEstru_3)
  const torniLamiOpenQuantity = ceilHundreds(torniLami_3)

  const lamina_4 = laminaOpenQuantity * 1.05
  const perimetrales_4 = perimetralOpenQuantity * 2
  const viguetas_4 = viguetaOpenQuantity * 1.2
  const omegas_4 = omegaOpenQuantity * 1.2
  const angulos_4 = anguloOpenQuantity * 2
  const torniEstru_4 = torniEstru_3 * 1.2
  const torniLami_4 = torniLami_3 * 1.2

  const laminaModularQuantity = Math.ceil(lamina_4)
  const perimetralModularQuantity = Math.ceil(perimetrales_4)
  const viguetaModularQuantity = Math.ceil(viguetas_4)
  const omegaModularQuantity = Math.ceil(omegas_4)
  const anguloModularQuantity = Math.ceil(angulos_4)
  const torniEstruModularQuantity = ceilHundreds(torniEstru_4)
  const torniLamiModularQuantity = ceilHundreds(torniLami_4)

  const laminaOpenPrice = laminaOpenQuantity * laminaUnitCost
  const perimetralOpenPrice = perimetralOpenQuantity * perimetralUnitCost
  const viguetaOpenPrice = viguetaOpenQuantity * viguetaUnitcost
  const omegaOpenPrice = omegaOpenQuantity * omegaUnitCost
  const anguloOpenPrice = anguloOpenQuantity * anguloUnitCost
  const torniEstruOpenPrice = torniEstruOpenQuantity * torniStructUnitcost
  const torniLamiOpenPrice = torniLamiOpenQuantity * torniLami

  const laminaModularPrice = laminaModularQuantity * laminaUnitCost
  const perimetralModularPrice = perimetralModularQuantity * perimetralUnitCost
  const viguetaModularPrice = viguetaModularQuantity * viguetaUnitcost
  const omegaModularPrice = omegaModularQuantity * omegaUnitCost
  const anguloModularPrice = anguloModularQuantity * anguloUnitCost
  const torniEstruModularPrice = torniEstruModularQuantity * torniStructUnitcost
  const torniLamiModularPrice = torniLamiModularQuantity * torniLami

  return {
    lamina: {
      abierto: {cantidad:laminaOpenQuantity, costo: laminaOpenPrice},
      modular: {cantidad:laminaModularQuantity, costo: laminaModularPrice}},
    perimetral: {
      abierto: {cantidad:perimetralOpenQuantity, costo: perimetralOpenPrice},
      modular: {cantidad:perimetralModularQuantity, costo: perimetralModularPrice}},
    vigueta: {
      abierto: {cantidad:viguetaOpenQuantity, costo: viguetaOpenPrice},
      modular: {cantidad:viguetaModularQuantity, costo: viguetaModularPrice}},
    omega: {
      abierto: {cantidad:omegaOpenQuantity, costo: omegaOpenPrice},
      modular: {cantidad:omegaModularQuantity, costo: omegaModularPrice}},
    angulo: {
      abierto: {cantidad:anguloOpenQuantity, costo: anguloOpenPrice},
      modular: {cantidad:anguloModularQuantity, costo: anguloModularPrice}},
    torniStruct: {
      abierto: {cantidad:torniEstruOpenQuantity, costo: torniEstruOpenPrice},
      modular: {cantidad:torniEstruModularQuantity, costo: torniEstruModularPrice}},
    torniLami: {
      abierto: {cantidad:torniLamiOpenQuantity, costo: torniLamiOpenPrice},
      modular: {cantidad:torniLamiModularQuantity, costo: torniLamiModularPrice}}
  }
}

export const getTotal = ({
  lamina,
  perimetral,
  vigueta,
  omega,
  angulo,
  torniStruct,
  torniLami
}) => (environment) => {
  return [
    lamina, perimetral, vigueta,
    omega, angulo, torniStruct,
    torniLami
  ].map(({[environment]: {costo}}) => costo).reduce((acc, value) => acc + value, 0)
}
