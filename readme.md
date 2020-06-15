# ChainElement

### by Alex Merced of AlexMercedCoder.com

ChainElement is a class that extends HTMLElement to make easy to make powerful and reactive web components that can be used in projects with or without frontend frameworks like React, Angular and Vue.

## Installation

### CDN

```
script src="http://www.alexmercedcoder.com/CE.js" charset="utf-8" defer></script>
```

### NPM

```
npm i chainelement
```

in your javascript file

```
const {ChainElement} = require("chainelement")
```

### ES6 Module

index.html

```
<script type="module" src="app.js" charset="utf-8" defer></script>
```

app.js

```
import {ChainElement} from "http://www.alexmercedcoder.com/CEMOD.js"
```

## Creating a component

```

const initialState = {};

class TestTest extends ChainElement {
    constructor() {
        super(initialState);
    }

    builder(state, props, storage, query) {
        const style = `<style>h1{color: blue;}</style>`;

        const template = `<h1>Hello World</h1>`;

        return `${style} ${template}`;
    }
}

ChainElement.makeTag('test-test', TestTest);


```

using the component in your HTMLElement

```
<body>
    <test-test></test-test>
</body>
```

### Instance Methods

**instance.build()** => re-renders the component

**instance.builder(state, props, storage, query)** => override this function that returns the template for the component. It takes four arguments.

state => The state of the component Instance
props => The props of the component instance
storage => The global ChainElement data store, you can add to this global data store like so...

```
ChainElement.storage.newPropertyName = value
```

query => Object of url queries present when the page loaded

**instance.setState(newState)** set a new state, re-renders component

### Class Methods and Properties

ChainElement.storage => (object of data available to all ChainElement derived components, adding data does NOT automatically re-render components)

ChainElement.list => array of all component instances of components derived from ChainElement

ChainElement.buildAll() => re-renders all components in the list array

ChainElement.query => Object with any URL queries that existed when the page loaded

_abbreviations of standard DOM functions to make using them easier_

ChainElement.doc.select(query) => document.querySelector(query)

ChainElement.doc.selectAll(query) => document.querySelectorAll(query)

ChainElement.doc.byId(query) => document.getElementById(query)

ChainElement.doc.byTag(query) => document.getElementsByTagName(query)

ChainElement.doc.byClass(query) => document.getElementsByClassName(query)

ChainElement.doc.create(query) => document.createElement(query)

ChainElement.doc.remove(query) => document.removeChild(query)

ChainElement.doc.append(query) => document.appendChild(query)

ChainElement.doc.replace(old, new) => document.replaceChild(old, new)

_abbreviations of shadow DOM functions to make using them easier_

ChainElement.shad.select(element, query) => element.shadowRoot.querySelector(query)

ChainElement.shad.selectAll(element, query) => element.shadowRoot.querySelectorAll(query)

ChainElement.shad.byId(element, query) => element.shadowRoot.getElementById(query)

ChainElement.shad.byTag(element, query) => element.shadowRoot.getElementsByTagName(query)

ChainElement.shad.byClass(element, query) => element.shadowRoot.getElementsByClassName(query)

ChainElement.shad.create(element, query) => element.shadowRoot.createElement(query)

ChainElement.shad.remove(element, query) => element.shadowRoot.removeChild(query)

ChainElement.shad.append(element, query) => element.shadowRoot.appendChild(query)

ChainElement.shad.replace(element, old, new) => element.shadowRoot.replaceChild(old, new)

## Lifecycle functions

Use the standard Web Component callbacks for lifecycle Functions

connectedCallback() => on mount
disconnectedCallback() => on dismount

-can also define a postBuild(state, props, global, query) function that will run immediately after each render, good for adding eventlisteners to your template
