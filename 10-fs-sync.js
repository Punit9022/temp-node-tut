// fs module
// with the help of fs module we can interact with the file system of our local computer

const { readFileSync, writeFileSync } = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `The result is: ${first} ${second}`,
  { flag: 'a' }
)

console.log('done with this task')
console.log('starting the next task')

// If some user requires the functionality than node will provide him this functionality and node is busy in serving
// this user the above functionality now at this time the other user cannot use the application