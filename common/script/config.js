/**
 * 配置信息
 */

const API_DOMAIN = 'http://api-moviejie.sai628.com:5000'

module.exports = {
    // 是否为调试模式, 为true时将输出日志信息
    isDebug: true,
    api: {
        // 更新(首页)
        INDEX: API_DOMAIN,
        // 最新电影
        NEW_MOVIE: API_DOMAIN + '/new/movie/',
        // 最新电视剧
        NEW_TV: API_DOMAIN + '/new/tv/',
        // 最新原声大碟
        NEW_OST: API_DOMAIN + '/new/ost/',
        // 搜索电影
        SEARCH: API_DOMAIN + '/search/',
    },
    strings: {
        MSG_NETWORK_ERROR: '网络不佳, 请重试',
        EMPTY_DATA: '空空如也',
    }
}