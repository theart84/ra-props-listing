import ListingItem from "./ListingItem/ListingItem";

import data from '../../data/data.json';

const Listing = () => {
  return(
    <div className="item-list">
      {data.map(item => <ListingItem
        key={item.listing_id}
        url={item.url}
        src={item.MainImage.url_570xN}
        title={item.title}
        currency={item.currency_code}
        price={item.price}
        quantity={item.quantity}
      />)}
    </div>
  )
}

export default Listing;

