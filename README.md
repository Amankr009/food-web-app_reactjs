# Learn React

•	ReactElement(Object) => HTML(Browser Understands)


•	Browser understand keys document, innerHTML, getElementById.. because browser having JS engine in it.
•	Browser do not know react.
•	Use react in brower – 
o	cdn – add cdn link in code(not preferred)
o	npm – npm install react  / npm install react-dom, then import and add type=”module” under script tag


•	package.json is config for npm (required on git)
o	^ - auto minor update
o	~ - auto major update
•	devDependencies – used for dev
o	ex - npm install -D parcel
	parcel created a server for project and hosted on port(cmd – npx parcel index.html)
	parcel also do HMR – hot module replacement
	parcel – File Watching algorithm(written in c++)
	parcel – caching for faster builds
	parcel – do image optimization, minification, bundling, compress, consistent hashing, code splitting, differential bundling(support on different browser or browser version), error handling, HTTPs, diagnostics, tree shaking(remove unused codes) 
	parcel – different dev and prod bundles under dist folder(cmd - npx parcel build index.html)
•	npm – to install package
•	npx – to execute package
•	dependencies – can used on production also
•	package-lock.json – keeps exact track of version of packages(lock exact version) (required on git)
•	node_modules – contains all the code that we fetch from npm (not required on git)
•	.gitignore – ignore files(ex-node_modules) to push on production/git

	browserslist under package.json 
o	can define which version and browser compatible to use our app
	ex – “browserlist”: [“last 2 version”] 
o	browserlist.dev - ref

•	Transitive dependencies – dependencies having dependencies and so on
•	webpack – bundler of code for production like parcel
package.json – “script” -> “start”, “build”

•	JSX –  JSX is not HTML, it is HTML-like or XML-like syntax.
•	JSX transpiled before it reaches the JS – by parcel with the help of babel package
JSX -> React.createElement -> React.Element-JS Object -> HTMLElement(render)
babeljs.io – ref
React Component
•	class based component – old
•	function based component – latest
Inline CSS in react
•	<div style={{backgroundColor:”black”}} -> use double braces, first braces define JavaScript inside it and second braces defines JavaScript object
config driven UI -> UI depends on config
why needs to add key in map function in js -> to stop re-render on change in data and render only newly added data with the help of key having unique id.
•	Index as key not recommended
•	Prefer to use unique id


Two types of Export/Import
•	default Export/Import
o	export default Component;
o	import Component from “path”;
•	Named Export/Import
o	export const Component;
o	import {Component} from “path”;
React Hooks (Normal JS utility functions)
•	useState() – import {useState} from “react”;
o	const [variable, setState] = useState([default value]);
•	useEffect()
•	when state changes react re-render component
react works on Reconciliation Algorithm (React Fiber) -> re-render reactDOM if there is change in react object
