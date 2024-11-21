import { CARD_IMG_URL } from '../../utils/constant'
import { CDN_URL } from '../../utils/constant'

const RestaurantCard = (prop) => {
  const { name, cuisines, avgRating, timing, cloudinaryImageId } =
    prop.resData.info
  return (
    <div className="res-card">
      <img className="res-card-img" src={CDN_URL + cloudinaryImageId} />
      {/* <img className="res-card-img" src={CARD_IMG_URL} /> */}

      <h3>{name}</h3>
      <h4 className="cuisines">{cuisines.toString()}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{timing}</h4>
    </div>
  )
}

export default RestaurantCard
