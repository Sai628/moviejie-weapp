var config = require('./config.js')
var util = require('../../util/util.js')
var message = require('../../component/message/message')


/**
 * 获取"首页"信息
 * @param {(object)=>Void} onSuccess 
 * @param {()=>Void} onFailure 
 */
function getIndexInfo(onSuccess, onFailure) {
    var self = this
    message.hide.call(self)

    var url = config.api.INDEX
    util.log('url:' + url)
    wx.request({
        url: url,
        success: function(res) {
            self.setData({
                showLoading: false,
                news: res.data.news,
                hots: res.data.hots
            })

            util.log(res.data)
            typeof onSuccess === 'function' && onSuccess(res.data)
        },
        fail: function() {
            self.setData({
                showLoading: false
            })

            message.showOffline.call(self, config.strings.MSG_NETWORK_ERROR)
            typeof onFailure === 'function' && onFailure()
        },
        complete: function() {
            wx.stopPullDownRefresh()
        }
    })
}


/**
 * // 获取"电影/电视剧"详情信息
 * @param {string} movieLink 
 * @param {(object)=>Void} onSuccess 
 * @param {()=>Void} onFailure 
 */
function getMovieInfo(movieLink, onSuccess, onFailure) {
    var self = this
    message.hide.call(self)

    var url = config.api.INDEX + movieLink
    util.log('url:' + url)
    wx.request({
        url: url,
        success: function(res) {
            self.setData({
                showLoading: false,
                movieInfo: res.data.movie
            })

            util.log(res.data)
            typeof onSuccess === 'function' && onSuccess(res.data)
        },
        fail: function() {
            self.setData({
                showLoading: false
            })

            message.showOffline.call(self, config.strings.MSG_NETWORK_ERROR)
            typeof onFailure === 'function' && onFailure()
        },
        complete: function() {
            wx.stopPullDownRefresh()
        }
    })
}


/**
 * 获取下载链接详情信息
 * @param {string} link 
 * @param {(object)=>Void} onSuccess 
 * @param {()=>Void} onFailure 
 */
function getLinkDetailInfo(link, onSuccess, onFailure) {
    var self = this
    message.hide.call(self)

    var url = config.api.INDEX + link
    util.log('url:' + url)
    wx.request({
        url: url,
        success: function(res) {
            self.setData({
                showLoading: false,
                linkDetailInfo: res.data.link_detail
            })

            util.log(res.data)
            typeof onSuccess === 'function' && onSuccess(res.data)
        },
        fail: function() {
            self.setData({
                showLoading: false
            })

            message.showOffline.call(self, config.MSG_NETWORK_ERROR)
            typeof onFailure === 'function' && onFailure()
        },
        complete: function() {
            wx.stopPullDownRefresh()
        }
    })
}


/**
 * 获取原声大碟详情信息
 * @param {string} ostLink 
 * @param {(object)=>Void} onSuccess 
 * @param {()=>Void} onFailure 
 */
function getOSTInfo(ostLink, onSuccess, onFailure) {
    var self = this
    message.hide.call(self)

    var url = config.api.INDEX + ostLink
    util.log('url:' + url)
    wx.request({
        url: url,
        success: function(res) {
            self.setData({
                showLoading: false,
                ostInfo: res.data.ost
            })

            util.log(res.data)
            typeof onSuccess === 'function' && onSuccess(res.data)
        },
        fail: function() {
            self.setData({
                showLoading: false
            })

            message.showOffline.call(self, config.MSG_NETWORK_ERROR)
            typeof onFailure === 'function' && onFailure()
        },
        complete: function() {
            wx.stopPullDownRefresh()
        }
    })
}


/**
 * 获取最新电影列表
 * @param {string} page 分页. 如"p1"表示第1页, "p2"表示第2页. 从"p1"开始索引.
 * @param {(object)=>Void} onSuccess 
 * @param {()=>Void} onFailure 
 */
function getNewMovie(page, onSuccess, onFailure) {
    var self = this
    message.hide.call(self)

    var url = config.api.NEW_MOVIE + page + '/'
    util.log('url:' + url)
    wx.request({
        url: url,
        success: function(res) {
            self.setData({
                showLoading: false,
                movies: res.data.movies
            })

            util.log(res.data)
            typeof onSuccess === 'function' && onSuccess(res.data)
        },
        fail: function() {
            self.setData({
                showLoading: false
            })

            message.showOffline.call(self, config.MSG_NETWORK_ERROR)
            typeof onFailure === 'function' && onFailure()
        },
        complete: function() {
            wx.stopPullDownRefresh()
        }
    })
}


/**
 * 获取最新电视剧列表
 * @param {string} page 分页. 如"p1"表示第1页, "p2"表示第2页. 从"p1"开始索引.
 * @param {(object)=>Void} onSuccess 
 * @param {()=>Void} onFailure 
 */
function getNewTv(page, onSuccess, onFailure) {
    var self = this
    message.hide.call(self)

    var url = config.api.NEW_TV + page + '/'
    util.log('url:' + url)
    wx.request({
        url: url,
        success: function(res) {
            self.setData({
                showLoading: false,
                movies: res.data.movies
            })

            util.log(res.data)
            typeof onSuccess === 'function' && onSuccess(res.data)
        },
        fail: function() {
            self.setData({
                showLoading: false
            })

            message.showOffline.call(self, config.MSG_NETWORK_ERROR)
            typeof onFailure === 'function' && onFailure()
        },
        complete: function() {
            wx.stopPullDownRefresh()
        }
    })
}


/**
 * 获取最新原声大碟列表
 * @param {string} page 分页. 如"p1"表示第1页, "p2"表示第2页. 从"p1"开始索引.
 * @param {(object)=>Void} onSuccess 
 * @param {()=>Void} onFailure 
 */
function getNewOST(page, onSuccess, onFailure) {
    var self = this
    message.hide.call(self)

    var url = config.api.NEW_OST + page + '/'
    util.log('url:' + url)
    wx.request({
        url: url,
        success: function(res) {
            self.setData({
                showLoading: false,
                ostInfos: res.data.ost_infos
            })

            util.log(res.data)
            typeof onSuccess === 'function' && onSuccess(res.data)
        },
        fail: function() {
            self.setData({
                showLoading: false
            })

            message.showOffline.call(self, config.MSG_NETWORK_ERROR)
            typeof onFailure === 'function' && onFailure()
        },
        complete: function() {
            wx.stopPullDownRefresh()
        }
    })
}


/**
 * 搜索电影
 * @param {string} keyword 搜索关键字
 * @param {string} page 分页. 如"p1"表示第1页, "p2"表示第2页. 从"p1"开始索引.
 * @param {(object)=>Void} onSuccess 
 * @param {()=>Void} onFailure 
 */
function search(keyword, page, onSuccess, onFailure) {
    var self = this
    message.hide.call(self)

    var url = config.api.SEARCH + 'q_' + encodeURIComponent(keyword) + '/' + page + '/'
    util.log('url:' + url)
    wx.request({
        url: url,
        success: function(res) {
            self.setData({
                showLoading: false,
                movies: res.data.movies
            })

            util.log(res.data)
            typeof onSuccess === 'function' && onSuccess(res.data)
        },
        fail: function() {
            self.setData({
                showLoading: false
            })

            message.showOffline.call(self, config.MSG_NETWORK_ERROR)
            typeof onFailure === 'function' && onFailure()
        },
        complete: function() {
            wx.stopPullDownRefresh()
        }
    })
}


module.exports = {
    getIndexInfo: getIndexInfo,
    getMovieInfo: getMovieInfo,
    getLinkDetailInfo: getLinkDetailInfo,
    getOSTInfo: getOSTInfo,
    getNewMovie: getNewMovie,
    getNewTv: getNewTv,
    getNewOST: getNewOST,
    search: search
}