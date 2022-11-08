const fs = require('fs')

const nextContent = `'This is perfect fack!!!'`
const nextNextContent = `'Oh...!'`


const content = `'What the fack?!'`
fs.writeFile('./server.js', content, (err)=>{
    err?console.error(err):null
    return
})
fs.open('./index.js', 'w+', (err) => err?console.error(err):null)

fs.appendFile('./index.js', nextContent, (err)=>{
    err?console.error(err):null
    return
})
fs.appendFile('./index.js', nextNextContent, (err)=>{
    err?console.error(err):null
    return
})