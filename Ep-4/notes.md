Passing a prop to a function is like passing an argument to a function

When we are getting the warning to use key in map ===> because if we dont give a unique key React will clear all the items and rerender all the lists of items. even if one data is added extra, this increase the rendering cycle but if u give key then it will only render the newly added one. This is a huge optimazation method
But React itself says that dont use indexes as a key'

Blog writing ---- https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
Blog writing on Why React gives a warning if we dont put key in map
Blog Writing -- try writing similar blogs which are present in react docs

you can create a similar project : https://metricscoffee.sid.vercel.app/
