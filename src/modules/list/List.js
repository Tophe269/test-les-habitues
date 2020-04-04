import React from 'react'
import { getCurrencySymbol } from './listHelpers'

function List({ list, fetchList }) {
  return (
    <>
        <div className="reload-list">
            <button className="reload-button" onClick={fetchList}>Actualiser la liste</button>
        </div>
        <div className="shop-list">
            {list.map(({ logo, name, address, zipcode, city, maxoffer, currency, }, index) => (
                <div key={index} className="shop">
                    <img src={logo} alt={name} className="shop-img" />
                    <div className="shop-desc">
                        <div className="shop-name">{name}</div>
                        <div className="shop-adress">{address}</div>
                        <div className="shop-city">{`${zipcode} ${city}`}</div>
                        <div className="shop-offer">{`Up to ${maxoffer}${getCurrencySymbol(currency)} offered.`}</div>
                    </div>
                </div>
            ))}
        </div>

    </>
  )
}

export default List
