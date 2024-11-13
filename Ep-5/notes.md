Why we are using React ===> Becuase all those which React does can also be done by HTML CSS JS. So REact gives this super power to build large scale production ready performant appliation. React makes your coding experience very fast and also optimizes things on web page so that things happen very fast

Generally there is a good convention that all the main code we generally keep it in a src folder

**\*\*\*\***Rembember the code that we write is first for humans and then machine so make it user friendly

Never ever keep your hardcoded file into ur component file eg: image cdn link keep all those things in utils folder inside that create constant.js file which will have all the hardcoded things
and it is a good proactise to name all the constant variables in a capital lettes. eg. const LOGO_URL = "sdfsdfs.com/images/logo"

There are 2 ways to export a file the first way is to export using default export but u can use it only once in a single file
and the other type of export is named export this is used where u wanted to export multiple datas in a single file
how to use named export is just use export keyword infornt of the variable

we we slightly import named export we should use curly braaces eg.
import { CARD_IMG_URL } from "../../utils/constant"

in Uber compnay there is a rule that if your code is more then 100 lines in a file then there is something wrong u didnt made it as a component so make differnt components and keep ur code short

If u wanted to keep ur UI layer and Data layer in sync that is where React comes if ur data changes then ur ui updates u can do this using HOOKS (use state)

React Hooks are normal JS utility function with superpowers
there are 2 very import Hooks

1. useState()
2. useEffect()

**\*\*\***and u have to import these hooks as a named import ===> {}
import {useState} from 'react

**\*\*\*\***//Whenever a state varible updates REact rerenders the components

Write on:

- Virtual DOM
-

Reconcialiation Algorithm is also known as React Fiber ===> here it creates a Virtual Dom and check the current dom if something changes / get updated it immediately updates the Dom

Whenever there is change in any state variable, React will find out difference between Virtual DOM and will rerender our componenet and update the DOM

Why REACT is Fast? ===> Because React is doing efficient DOM manipulation ===> how ==> because it has a virtual DOM => it has DIFF REconcilation algorithm REact can efficiently find out the difference between virtual dom and update the UI. This is the core of REACT

--As soon as u call the setState react will find the difference and upadte the DOM

write a blog on how the State variables work behind the scenes

and ppl dont know why there are 2 thing [state, setState] why cant it update the things in a single variable why it needs 2 things ===> becuase we neede setState becasue there needs to be a trigger to start the Diff Algorithm and update the UI. so whenever u call the second func i.e. setState it will automatically rerenders ur components
