// os module
// with the help of os module, we can get details associated to user, os, etc

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method return the system uptime in seconds(from how long the system is running)
console.log(os.uptime())

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)

/*
    Built-in modules:-
    os
    path
    fs
    http

    For the built-in modules we do not need to install them directly we can require them and use them
    and while requiring we only provide the name not the entire path


*/
