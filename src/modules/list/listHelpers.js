export function parseData (data) {
    const { results } = data
    return results.map(
        ({ logo, name, address, zipcode, city, maxoffer, currency, }) =>
        ({ logo, name, address, zipcode, city, maxoffer, currency, })
    )
}

export function getCurrencySymbol ( currency ) {
    if (currency === 'EUR') { return '€' }
}