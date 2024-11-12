import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-FXXT8R-iO6Zo92qNmI1EeJ7Sg-_ptPPPYQ&s"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
const resList = [
  {
    resName: 'Megna Foods',
    cuisine: 'Biryani, North Indian, Asian',
    rating: '4.3 ',
    timing: '38 minutes',
    id: 1,
  },
  {
    resName: 'KFC',
    cuisine: 'Burger, Fast Food',
    rating: '4.3 ',
    timing: '38 minutes',
    id: 2,
  },
  {
    resName: 'Juice Shop',
    cuisine: 'Milkshakes, Fruit Juices, Artifical Juices',
    rating: '4.3 ',
    timing: '38 minutes',
    id: 3,
  },
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((data) => (
          <RestaurantCard key={data.id} resData={data} />
        ))}
      </div>
    </div>
  )
}
const RestaurantCard = (prop) => {
  const { resName, cuisine, rating, timing } = prop.resData
  return (
    <div className="res-card">
      <img
        className="res-card-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/440c06ace44b931b729d9b6a090aba07"
      />
      <h3>{resName}</h3>
      <h4 className="cuisines">{cuisine}</h4>
      <h4>{rating}stars</h4>
      <h4>{timing}</h4>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
