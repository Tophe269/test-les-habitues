export function parseData ({data}) {
    return data.map(
        ({ logo, name, address, zipcode, city, maxoffer, currency, }) =>
        ({ logo, name, address, zipcode, city, maxoffer, currency, })
    )
}

export function getCurrencySymbol ( currency ) {
    if (currency === 'EUR') { return '€' }
}