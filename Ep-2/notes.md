NPM is a node package manager but it does not stands for node package manager. It dosen't has full form.

package.json file is the configuration file for NPM

The create raect app which we write it uses Webpack behind the scenes

There are 2 Types of Dependices : 1st is the Dev Dependices and the other is the normal dependices

"devDependencies": {
"parcel": "^2.12.0"
}
Here the ^ sign means : carat
the sign ~ means : tilde

Difference between package.json and package-lock.json : here package-lock.json keeps the track of exact version means it locks the version and keeps the record of it

What is Transitive Dependency ?
-> If i install parcel that parcel package might have multiple dependicies that also that dependicies might also have some dependicies.
Parcel cannot do everthing on its own it need help of many other dependicies

Is it required to push both the package.json and package-lock.json to git?
-> Absolutely Yes, Becuase Package.json file has only the packages you installed but package-lock.json has all the packages that are dependent to the packager you installed. Hence both the files should be pushed to git

npx parcel ./index.html => What is this npx =>just like npm we have npx and npx means executing a package
if u wanted to install a package you will write npm but if u wanted to execute some package then u will write npx package name

<script src="App.js"></script> ==> our browser treats this script as a normal script but if u use import statement inside that script then it give u an error because we have to make that script tag as a module then that import will work inside ===> <script type="module" src="App.js"></script>

#parcel
-Dev build
-Local Server
-Refreshing your page whenever u save ur code --->HMR(Hot Module Replacement)
-Faster Build because of Cache
-Image Optimazation
-minification of code
-bundling our code
-compress our code
-Consistent HAshing
-Code Spliting
-Differential bundling --- menas suppports older browser also
-Diognostics
-Better Error Suggestion
-also give u a way to host it on https
-Tree Shaking --- means it will remove unused code for u

Why is your REact app is Fast ?
==> it is not beacuse of REact but becuase of the pacjkages it uses like pacrcel/webpack/vite which help it to be more fast. and its not judt REact and parcel is also not doing all the things on its own it also uses some packages or library's to optimize
