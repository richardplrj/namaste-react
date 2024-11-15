import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filteredRestaurantsState, setFilteredRestaurantsState] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0244134&lng=72.8629943&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
    const json = await data.json()
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setFilteredRestaurantsState(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={async () => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              )
              filteredRestaurants.length === 0
                ? alert('Result not found')
                : setFilteredRestaurantsState(filteredRestaurants)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants((preVal) =>
              preVal.filter((res) => res.info.avgRating > 4.0)
            )
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantsState.map((data) => (
          <RestaurantCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  )
}

export default Body
