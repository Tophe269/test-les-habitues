export function parseData (data) {
    const { results } = data
    return results.map(
        ({ logo, name, address, maxoffer }) =>
        ({ logo, name, address, maxoffer })
    )
    
}