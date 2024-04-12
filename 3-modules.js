// Modules

const { john, peter } = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
// even though we are not assigning this import to a variable than also while importing
// it, it gets invoked
// While we import a module it actually gets invoked
// while importing some module node wraps that code in some function and that function gets invoked

console.log(data)

sayHi('Punit')
sayHi(john)
sayHi(peter)
