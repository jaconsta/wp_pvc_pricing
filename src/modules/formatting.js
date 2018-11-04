export const moneyFormat = (value) => `$ ${new Intl.NumberFormat().format(value)}`

export const ceilHundreds = value => Math.ceil(value/100) * 100
