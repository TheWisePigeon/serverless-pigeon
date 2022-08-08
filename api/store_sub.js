const fs = require('fs')
const subs = require('./subs.json')

const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
      res.status(200).end()
      return
    }
    return await fn(req, res)
}

async function handler(req, res) {
    const { newSub } = req.body
    subs.subs.addresses.push(newSub)
    fs.writeFile('./api/subs.json', JSON.stringify(subs), function writeJSON(err) {
        if (err) return console.log(err)
    });
    return res.json({
        "subs": subs.subs.addresses,
        "status": "success"
    });
}

export default allowCors(handler)