![Logo for the tabs extension](./public/Assets/logo.svg)

A Spotlight-like tab manager extension for Google Chrome, built with ReactJS.

## Quickly search and select among open tabs
Just hit *ctrl+space* to launch the extension.

![Demo for the tabs extension](./public/Assets/tabs_demo.gif)

## Running _tabs_ from the codebase
<!-- The simplest way to run tabs is to install it via the Chrome web store, but you can follow the steps below if you want to build it directly from its source. -->

1. Clone this repository.
2. Install npm, if you don't already have it.
3. In the _tabs_ repo, run `npm install`, followed by `npm run build`.
4. Go to _extensions_ in Chrome and enable `developer mode`.
5. Drag the `build` directory, which should have been generated in the _tabs_ repo during step 3, onto the _extensions_ page.

The extension should now be active. 


## Acknowledgements
- Thanks to [fuse.js](http://fusejs.io/) for the fuzzy search library.
- Icons provided by [Google Material Design](https://material.io/).
- Project bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).
