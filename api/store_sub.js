const fs = require('fs')
const subs = require('../public/subs.json')

export default function handler( _req, res){
    console.log(subs);
    return res.send('Hello World', subs.subs.addresses);
}