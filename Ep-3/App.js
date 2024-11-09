import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = <h1>This is an element</h1>
const NewHeading = () => <h2>This is a component</h2>

const HeadingComponent = () => {
  return (
    <div>
      <NewHeading />
      <h1>this is a Functional Heading Component</h1>
      {heading}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)
