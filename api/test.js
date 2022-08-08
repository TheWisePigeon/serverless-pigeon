const subs = require('./subs.json')
const fs = require('fs')
console.log(subs);
const newSub = 'huruh'
subs.subs.addresses.push(newSub)
fs.writeFile('./api/subs.json', JSON.stringify(subs), function writeJSON(err) {
    if (err) return console.log(err)
});