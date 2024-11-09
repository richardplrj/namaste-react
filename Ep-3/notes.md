A lot of Developers think that JSX is a part of React ===> NOOO, React is different and JSX is different
And those developer think that we cannot write React without JSX ===> NO we can write React without JSX also eg. React.createElement('h1',{},'This is heading' and then render it into root)

But JSX makes our developers life easy

JSX is not HTML in JavaScript --- JSX is HTML like syntax

// By using Core REact
const heading = React.createElement(
'h1',
{ id: 'heading' },
'This is an H1 Tag'
)

// By using JSX
const JSXheading = <h1 id='heading'>This is an H1 Tag</h1>

Even is you console.log(JSXheading) ==> you will get an object same as Core React output

is JSX a vaild JavaScript ===> No and Yes ===> No beacuse this is not pure JAvascript and the JS Engine does not understands JSx; Js code are those code which JS engine understands;;; JS Engine understands ECMAA Script

THen how come the JSX is understood by root.render(JSXheading) ====>here PArcel transpiles the code before it reaches the JS and Parcel doesnt does all these things alone it uses BABEL to do his work;;;;;;;;;Babel is a JavaScript compiler

JSX at the end of the day is React.CreateElement=====> JSX gets converted to REact.CreateElement through Babel means BABel transpiles it

if you have to give attributes to JSX u have to give camelCase Eg. className
If your JSX is in single line then it is fine but if it is in multiple lines then you should wrap it in a parentesis

Whenever you are creating a react component name it with a capital letter otyherwise u will get an error

A react functional component ===> is a function that returns a paiece of JSX code

THere is a differnece between a component and an element
eg.
const HeadingComponent = ()=> <h1>This is heading component</h1>
const headingElement = <h1>This is heading element</h1>

in root.render()
you can write
root.render(<HeadingComponent/>)
root.render(headingElement)

Component Composition means you are composing two components to one another

const heading = <h1>This is an element</h1>
const NewHeading = () => <h2>This is a component</h2>

const HeadingComponent = () => {
return (

<div>
<NewHeading /> // and this NewHeading can also be written as {NewHeading()}
<h1>this is a Functional Heading Component</h1>
{heading}
</div>
)
}

here the HeadingComponent is a component composition and look how the way we are writing element and component
that is how u put ur react elemnt into ur component eg. heading element

advantages of using JSX -- Sanitizes the data, Makes code readable
