# About React

- can create SPA(Single Page Application)

- ReactElement(Object) => HTML(Browser Understands)


- Browser understand keys document, innerHTML, getElementById.. because browser having JS engine in it.
- Browser do not know react.
- Use react in brower – 
	- cdn – add cdn link in code(not preferred)
	- npm – npm install react  / npm install react-dom, then import and add type=”module” under script tag 

- package.json is config for npm (required on git)
	- ^ - auto minor update
	- ~ - auto major update
	- devDependencies – used for dev

- ex - npm install -D parcel
- parcel created a server for project and hosted on port(cmd – npx parcel index.html)
- parcel also do HMR – hot module replacement
- parcel – File Watching algorithm(written in c++)
- parcel – caching for faster builds
- parcel – do image optimization, minification, bundling, compress, consistent hashing, code splitting, differential bundling(support on different browser or browser version), error handling, HTTPs, diagnostics, tree shaking(remove unused codes) 
- parcel – different dev and prod bundles under dist folder(cmd - npx parcel build index.html)
- npm – to install package
- npx – to execute package
- dependencies – can used on production also
- package-lock.json – keeps exact track of version of packages(lock exact version) (required on git)
- node_modules – contains all the code that we fetch from npm (not required on git)
- .gitignore – ignore files(ex-node_modules) to push on production/git-
- browserslist under package.json 
- can define which version and browser compatible to use our app
- ex – “browserlist”: [“last 2 version”] 
- browserlist.dev - ref-
- Transitive dependencies – dependencies having dependencies and so on
- webpack – bundler of code for production like parcel

- package.json – “script” -> “start”, “build”

- JSX –  JSX is not HTML, it is HTML-like or XML-like syntax.
- JSX transpiled before it reaches the JS – by parcel with the help of babel package
- JSX -> React.createElement -> React.Element-JS Object -> HTMLElement(render)
- babeljs.io – ref


- React Component
	- class based component – old
	- function based component – latest

- Inline CSS in react
	- <div style={{backgroundColor:”black”}} -> use double braces, first braces define JavaScript inside it and second braces defines JavaScript object

- config driven UI -> UI depends on config

- why needs to add key in map function in js -> to stop re-render on change in data and render only newly added data with the help of key having unique id.
	- Index as key not recommended
	- Prefer to use unique id

- Two types of Export/Import
	- default Export/Import
		- export default Component;
		- import Component from “path”;
	- Named Export/Import
		- export const Component;
		- import {Component} from “path”;

- React Hooks (Normal JS utility functions)
	- useState() – import {useState} from “react”;
	- const [variable, setState] = useState([default value]);
	- useEffect()
	- when state changes react re-render component
	- react works on Reconciliation Algorithm (React Fiber) -> re-render reactDOM if there is change in react object


- Monolith Architecture -> all service at same place. frontend, backend, middleware codes..
- Microservices -> services are at different places
	- Different services deployed on different ports
	- All ports mapped to domain name

- useEffect() -> run after render
	- import {useEffect} from “react”;
	- useEffect(() => {console.log(“useEffect called”);}, []);
	- 2 arguments -> callback function, dependency array


- Shimmer UI -> rather than use loading to wait for data, use fake UI

- About useEffect
	- if no dependency array => useEffect is called on every render
	- if dependency array is empty = [] => useEffect is called on initial render(just once)
	- is dependency array is [btnNameReact](having any value) => called everytime btnNameReact is updated

- some suggestions for useState for better approach
	- always declare useState variable on the top of code and inside component
	- never declare useState inside if/else, for loop or functions


- react-router-dom -> npm i react-router-dom -> helps use to create single page application
	- react-router
	- children react-router
	- import {Link} from react-router-dom; -> same as anchor tag using href but Link do not reload page like anchor tag


- Two types of Routing in web apps
	- server side routing
	- client side routing
- Dynamic routing -> ex-> on click card show details about that cards 


- Class Component
	- LifeCycle => constructor -> render -> componentDidMount -> componentDidUpdate(when state update) -> componentWillUnmount(call when leave that page)

- Functional Component
	- render -> useEffect (define return in case any operations required on page change)

- Custom Hooks for Optimisation
	- Ex- fetch data from api by creating custom hook(normal js function to fetch data) and import in the component where data required.


- Chunking - break down app into smaller file 
	- also called 
		- code splitting
		- dynamic bundling
		- lazy loading
		- on demand loading
		- dynamic import
	- used import {lazy, Suspense} from "react";

- different way to add style
	- sass
	- scss
	- style component
	- different libraries - Material UI, Bootstrap, Chakra UI, Ant Design, tailwindcss etc..


- tailwindcss
	- go to tailwindcss and check the different ways to configure
	- Tailwind CSS IntelliSense - tailwindcss helper extension for VS Code

- HOC(Higher Order Component) -> takes a compenent enhance and return the component

- Lifting State Up -> when a state needs to be shared with sibilings, we lift the state ip to the closest common ancestor to handle.

- props drilling -> passing data from one component to another components to access.
- context helps use to create space for data and use data anywhere in app.
- props drilling (problem) -> context (solution)

# Redux
- Install @reduxjs/toolkit and react-redux

- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

- Redux - helps to handle state, works in Data Layer
	- two libraries - bridge between react and redux
		- react-redux
		- redux-toolkit
	
	- redux store is javascipt object, kept in global central place(so, any component can use)
	
	- event -> dispatch(ACTION) -> ACTION calls reducer function -> modified slice of redux store

	- Selector to get data
		- Subscribing to the store(sync with store) using Selector

	- import {configureStore} from "@reduxjs/toolkit";
		- redux-toolkit helps to configure store
	- import {Provider} from "react-redux"; -> to root(also add Provider where wants to use)
		- importing from react-redux because we needs to provide our created store from @reduxjs/toolkit to our app
	- import {createSlice} from "@reduxjs/toolkit";
		- to create slice
	- import {useSelector} from "react-redux"; 
		- useSelector is hook from react-redux lib for reading from store
	- import {useDispatch} from "react-redux";
		- useDispatch is hook from react-redux lib to dispatch to the store

	- Vanilla(older) Redux
		- DON'T MUTATE STATE, returning is mandatory
    	- const newState = {...state};
		- newState.items.push(action.payload);
		- retuen newState;

	- Redux Toolkit(now)
		- we have to MUTATE state, redux takes care of immutation of original state with the helps of Immer library -> redux takes existing/original and new states and returns new state with difference state 
		- No need to return, react takes care of this
		- either Mutate the existing state or return a new state

- Zustand - same as redux to handle state

# Testing(Devloper)
- Types
	- Unit Testing
	- Integration Testing
	- End to End Testing / e2e testing

- Testing Library
	- React Testing Library (uses JEST -> JavaScript Testing Framework)

- Setting up Testing in our app(our app uses parcel)
	- npm i -D @testing-library/react

	- npm i -D jest

	- npm install --save-dev babel-jest @babel/core @babel/preset-env

	- configure babel
		- create a file babel.config.js at root level
		- add -> module.exports = {
  					presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
				};

	- configure parcel config file to disable default babel transpilation
		- create a file .parcelrc at root level
		- add ->	{
  						"extends": "@parcel/config-default",
  						"transformers": {
    						"*.{js,mjs,jsx,cjs,ts,tsx}": [
     							"@parcel/transformer-js",
      							"@parcel/transformer-react-refresh-wrap"
    						]
 						}
					}

	- npx jest --init
		- configure
			- √ Would you like to use Typescript for the configuration file? ... no
			- √ Choose the test environment that will be used for testing » jsdom (browser-like)
			- √ Do you want Jest to add coverage reports? ... yes
			- √ Which provider should be used to instrument code for coverage? » babel
			- √ Automatically clear mock calls, instances, contexts and results before every test? ... yes

	- npm i --save-dev jest-environment-jsdom (if you are unsing jest 28 or above)

	- npm i -D @babel/preset-react -> to make JSX work in test cases
		- include @babel/preset-react inside babel.config.js 
			- under presets array -> add -> ["@babel/preset-react", { runtime: "automatic"}] -> helps JSX/react code to converted normal HTML code

	- npm i -D @testing-library/jest-dom
		- import in test files -> import "@testing-library/jest-dom"

- npm run test -> commands to check test cases
- to auto run test on change in code, add -> "watch-test": "jest --watch", under script in package.json

- some helper functions for test cases
	- beforeALL(()=> {}); -> runs before test cases runs
	- beforeEach(()=> {}); -> runs before each test cases runs
	- afterALL(()=> {}); -> runs after test cases runs
	- afterEach(()=> {}); -> runs after each test cases runs
-----------------------------------------------------------------------------------------------------------------------------------------
