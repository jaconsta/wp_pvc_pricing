export const floorPricing = (floorUnitCost) => (width, depth) => {
  const area = width * depth
  const floorRequired = area / 0.2057
  const withResiduals = floorRequired * 1.1
  const roundArea = Math.ceil(withResiduals)

  const price = roundArea * floorUnitCost
  return { cantidad: roundArea, costo: price }
}
