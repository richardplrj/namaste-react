UseEffect is called using 2 things : 1) a Callback function and 2) a dependency array

and the depenceny array is not necessay onely the callback function is manditory

so when u call a useEffect without a dependency array it will render every time my componenent renders

---If the dependency array is EMpty so then useEffect is only called on the initial Render(just once)
--- If dependency array has [btnNamedReact] ==> this useEffect is called every time the btnNamedReact is Updated

-----UseState is used to create local state variable inside ur functional components and try to call this hook on the top and never create ur useState inside a if else Statement, functions, for loops ,etc

=====To create a Route first Need to create a Configuration soo for that we ahve to import {createBrowserRouter} from react-router-dom and then create the route by providing the path and element

====> In V\SCode there is a shortcut to create a Component ======== just type `rafce` and press enter

TO keep the Header in place and when u go to the About Us page then the Header should come=== > for this problem we should use Childrens in Route ----------- and We use Outlet to fill the content based on the path==== read more about childrens and Outlet

\***\*\*\*\*\*\***When u are using REACT never ever use a href to link to a page because if u go to a articlat page the whole page will be refreshed ===== for this we will import LINK from react-router-dom =================== so whenever u are navigating to a differnt route always use a link componenet

Why REAct is called Single PAge APplicatiopn === because it is a sigle page even if u go to a new route it fetch the data and only cahnged that componenet

There are 2 type oif routing that u can have in ur web apps

1. client side Routing 2) Server Side Routing

ALways Speak while you code this helps to explain the intervier
