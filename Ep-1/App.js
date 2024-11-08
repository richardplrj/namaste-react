const root = ReactDOM.createRoot(document.getElementById('root'))
const heading = React.createElement(
  'h1',
  { id: 'Heading' },
  'Hello Richard You are a REACT DEVELOPER'
)

console.log(heading) // This will return an object and it will not directly create an H1 tag --- that object will be converted to broweser readable code in root.render(heading)

// root.render(heading) // The work of render is to take the object and convert it into an h1 tag and putting it into root

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am an H1 tag'),
    React.createElement('h2', {}, 'I am an H2 tag'),
  ])
)

root.render(parent)
