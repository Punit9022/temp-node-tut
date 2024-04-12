// http module
// http module allows us to setup a web server

const http = require('http')

// const server = http.createServer((req, res) => {
//   // req object represents the incoming request on our server
//   // res object is the response that we send back

//   res.write('Welcome to our home page')
//   // once we have send the response we also need to end the request
//   res.end()
// })

const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.end('Welcome to our about page')
  } else if (req.url === '/') {
    res.end('Welcome to our home page')
  } else {
    res.end(`
      <h1>Oops</h1>
      <p>You entered on the wrong page</p>
      <a href="/">Go to the home page</a>
      `)
  }
  // If the user goes on the url that do not exist
})

// we also need to set up the port our server is listening on
server.listen(5000)

// now we are not exiting from the file
// since we have a web server, these server keep on lisenting for the request
// url is the address(endpoint) from which the client is requesting
// home url is represented by /
