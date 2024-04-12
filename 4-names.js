// local
const Secret = 'Super Secret'
// share
const john = 'John'
const peter = 'Peter'

// console.log(module)

// exports object ke andar jo bhi chize present hai wo ham globally access kar sakte hai
// but we need to make sure that hamne us module require kiya hua hai
// for the modules that we have created by our own we need to provide the entire
// path in the require function, but this is not the case with third party or built in modules

module.exports = { john, peter }
