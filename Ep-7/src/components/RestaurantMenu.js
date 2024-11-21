import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { CDN_URL } from '../../utils/constant'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../../utils/constant'

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu()
  }, [])
  const { id: selectedMenuID } = useParams()

  const [resInfo, setResInfo] = useState(null)
  const [resMenuItems, setResMenuItems] = useState(null)

  //Shimmer UI

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + selectedMenuID)
    const json = await data.json()
    console.log(json)

    setResInfo(json?.data?.cards[2]?.card?.card?.info)
    setResMenuItems(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    )
  }
  //
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="res-menu">
      <img className="res-img" src={CDN_URL + resInfo.cloudinaryImageId} />
      <h1 className="res-name">{resInfo?.name}</h1>
      <div className="menu-items">
        <h2 className="res-menu-text">Menu : </h2>
        <ul className="res-item-list">
          {resMenuItems.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} : Rs.
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu
