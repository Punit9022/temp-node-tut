// React has the create react app package which is hosted on npm
// package or dependency or module all three are the same and that is the sharable code

// All the 3rd party modules are hosted on npm

// package.json (manifest file) (stores important info about the project)
// In order to have the package.json file, there are three options:-
// either we can manually create the package.json file
// npm init
// npm init -y

// all the packages that we install are stored in the node_modules folder

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)
