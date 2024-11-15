What is Hook at the end of the day ---- aHook is nothing but a normal JavaScript function which REact gives to us its has it own specific usecase where we use this function

useEffect take 2 aurguments a callback function and []

useEffect(() => {
console.log('useEffect called')
}, [])

when this useEffect will be called ===> it will render the component and as soon as the render cycle finished it will just quickly call this callback function
So if u have to do something after rendering the component you have to write it inside useEffect.

eg. useEffect(() => {
console.log('useEffect called')
}, [])
console.log("body rendered")

==> here in this is code the 'body rendered' will be printed first because the useEffect is called only after the component is rendered

Why we are talking about useEffect:
because we are ollowing a certian structure like
Loads ======> Renders whatever we have ======> Calls API =======> Re Renders again
eg. useEffect(() => {
fetchData()
}, [])

how dop we fetch data ===> using fetch() ===> does it given by JS ====> It is given by Browser , its a superposer that JS Engine has

How CORS works ===> our browsers block us to call API from one origin to different origin. that is from localhost:1234 to swiggy's API . If there is a origin mismatch the browser blocks that API call... That is a CORS Policy

What is Shimmer UI ===> While page is loading initially showing loading is the old way doing latest is to use Shimmer UI=> this generated a face cards or skeleton like structure while the data is been fetched

Project ===> make some indepth version of Shimmer UI NPM Package

Good to know ==> if u use useState on a small Btn and change its name from login to logout then will React only change the Btn value and will it only rerender the btn value or it will a rerender the complete component =========> React will completely rerender the particular component where that useState variable was present. ,,, if u console log it then u will see

Good to know ===> in useState it a const varible right, how can i be updated its a const varible right ? ======> the ans is when u update the useState variable React will rerender that component again but this time the value of the old useState varible change to the new one beacuse it will set the const variable again means that old one is differnt then the new one.................but is update everthing in that componet again ,, ract is smart it uses DIFF ALGORITHM and finds which is newly added or updated and only updates that ......React is keeping track of everything

////**\*\*** Code Slow Always and understand each and every line of code u r writing **********\***********//////////////////
