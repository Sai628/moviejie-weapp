const duration = 3000

function show(cfg) {
    var self = this
    self.setData({
        message: {
            content: cfg.content,
            icon: cfg.icon,
            visible: true
        }
    })
    if (cfg.duration) {
        setTimeout(function() {
            self.setData({
                message: {
                    visible: false
                }
            })
        }, cfg.duration)
    }
}


function hide() {
    var self = this
    self.setData({
        message: {
            visible: false
        }
    })
}


function showOffline(content) {
    show.call(this, {
        content: content,
        icon: 'offline',
        duration: duration
    })
}


function showNull(content) {
    show.call(this, {
        content: content,
        icon: 'null',
        duration: duration
    })
}


module.exports = {
    show: show,
    hide: hide,
    showOffline: showOffline,
    showNull: showNull
}