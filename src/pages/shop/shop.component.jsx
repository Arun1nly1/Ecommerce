import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/preview-collection/preview-collection.component'

const ShopPage = () => {
  const collections = SHOP_DATA

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}
export default ShopPage
