import RestaurantCard from './RestaurantCard'
import resList from '../../utils/mockData'
import { useState } from 'react'

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([...resList])

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants((preVal) =>
              preVal.filter((res) => res.rating > 4.0)
            )
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((data) => (
          <RestaurantCard key={data.id} resData={data} />
        ))}
      </div>
    </div>
  )
}

export default Body
