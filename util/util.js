var config = require('../common/script/config.js')

function log(msg) {
    if (config.isDebug) {
        console.log(msg)
    }
}

module.exports = {
    log: log
}