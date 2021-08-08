export const formatMoney = (x: number) =>
  Number(x.toFixed(1)).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })
