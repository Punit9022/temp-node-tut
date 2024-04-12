// path module
// with the help of path module we can get the paths of different files

const path = require('path')

console.log(path.sep)
// this is the path seperator that we add in the path when we go in the deeper level of files

const filePath = path.join('/content', 'subfolder', 'test.txt')
// We need to join(merge) multiple path segments inorder to get the file path and this join
// method uses the path seperator to join the path segments

console.log(filePath)

const base = path.basename(filePath)
// it gives us the last portion of the filePath
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// The resolve method accepts the path segments and result into an absolute path
// our application is going to run in different environments so the path to the resource will be different
console.log(absolute)
