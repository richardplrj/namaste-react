so whenever we write document.createElement and things like that how does browser understands it -- because browser has a JAvascript Engines in it ....... But the browser does not know what is React - NO browser does not understand React code

Why there are 2 script files one is react script file and the other is react-dom script file --- why 2 and not one --- the first one is the core react file

const root = ReactDOM.createRoot(document.getElementById('root'))
const heading = React.createElement(
'h1',
{ id: 'Heading' },
'Hello Richard You are a REACT DEVELOPER'
)

console.log(heading) // This will return an object and it will not directly create an H1 tag --- that object will be converted to broweser readable code in root.render(heading)

root.render(heading) // The work of render is to take the object and convert it into an h1 tag and putting it into root
