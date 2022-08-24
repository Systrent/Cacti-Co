export const formatCurrency = (number) => {
    return Intl.NumberFormat('es-CR', {
        style: 'currency',
        currency: 'CRC',
        useGrouping: false,
        minimumFractionDigits: 0,
    }).format(number)
}