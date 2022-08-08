const fs = require('fs')
const subs = require('./subs.json')

export default function handler(req, res) {
    const { newSub } = req.body
    subs.subs.addresses.push(newSub)
    fs.writeFile('./api/subs.json', JSON.stringify(subs), function writeJSON(err) {
        if (err) return console.log(err)
    });
    return res.send('200');
}