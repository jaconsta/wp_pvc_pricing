export const wallPricing = (wallUnitCost) => (width, depth) => {
  const area = width * depth
  const withResiduals = area * 1.1
  const roundArea = Math.ceil(withResiduals)

  const price = roundArea * wallUnitCost
  return { cantidad: roundArea, costo: price }
}
