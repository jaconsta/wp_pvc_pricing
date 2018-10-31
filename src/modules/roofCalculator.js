export const calculateRoofQuantities = (width, depth, waterfalls) => {
  const widthOffset = width - 0.15
  const roundWidth = Math.ceil(widthOffset)

  const trueDepth = depth / 5
  const area = trueDepth * roundWidth
  const areaOffset = area - 0.2
  const ceils = Math.ceil(areaOffset)

  const botons = waterfalls - 1
  const caballetes = botons * roundWidth

  const screws = ceils * 15

  return {tejas: ceils, caballetes, tornillos: screws}
}

export const roofPricing = (tejasUnitCost, caballeteUnitCost, tornilloUnitcost) => (width, depth, waterfalls) => {
  const {tejas, caballetes, tornillos} = calculateRoofQuantities(width, depth, waterfalls)

  const tejasCost = tejas * tejasUnitCost
  const caballeteCost = caballetes * caballeteUnitCost
  const tornilloCost = tornillos * tornilloUnitcost
  return {
    tejas: { cantidad: tejas, costo: tejasCost },
    caballete: { cantidad: caballetes, costo: caballeteCost },
    tornillo: { cantidad: tornillos, costo: tornilloCost}
  }
}

export const getTotal = ({ tejas, caballete, tornillo }) => {
  return [tejas, caballete, tornillo].map(({costo}) => costo).reduce((acc, value) => acc + value, 0)
}
