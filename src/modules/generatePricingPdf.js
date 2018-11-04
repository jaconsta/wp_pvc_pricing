import JsPdf from 'jspdf'
import html2canvas from 'html2canvas'

export default async () => {
  const doc = new JsPdf({
    unit: 'mm',
    format: 'letter'
  })
  const source = window.document.getElementById('printArea') // eslint-disable-line no-undef
  const content = await html2canvas(source)
  const pricingAsImage = content.toDataURL('image/png')
  doc.addImage(
    pricingAsImage,
    'PNG', 10, 10
  )
  doc.save('myPricing.pdf')
}
