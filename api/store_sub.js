const fs = require('fs')
const subs = require('./subs.json')

export default function handler( _req, res){
    return res.send(subs);
}