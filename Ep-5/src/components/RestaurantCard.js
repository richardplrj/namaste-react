import { CARD_IMG_URL } from '../../utils/constant'
const RestaurantCard = (prop) => {
  const { resName, cuisine, rating, timing } = prop.resData
  return (
    <div className="res-card">
      <img className="res-card-img" src={CARD_IMG_URL} />
      <h3>{resName}</h3>
      <h4 className="cuisines">{cuisine}</h4>
      <h4>{rating}stars</h4>
      <h4>{timing}</h4>
    </div>
  )
}

export default RestaurantCard
