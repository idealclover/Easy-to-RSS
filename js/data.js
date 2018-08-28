var data = {
    "www.3dmgame.com": [
        {
            "name": "3dm全区新闻",
            "src": "/news",
            "dst": "/3dm/news"
        },
        {
            "name": "3dm游戏新闻",
            "src": "/games/:name/news",
            "dst": "/3dm/:name/news"
        },
        {
            "name": "3dm游戏攻略",
            "src": "/games/:name/gl",
            "dst": "/3dm/:name/gl"
        },
        {
            "name": "3dm游戏资源",
            "src": "/games/:name/resource",
            "dst": "/3dm/:name/resource"
        }
    ]
    // "www.3dmgame.com": {
    //     "/news": "/3dm/news",
    //     "/games/:name/news": "/3dm/:name/news",
    //     "/games/:name/gl": "/3dm/:name/gl",
    //     "/games/:name/resource": "/3dm/:name/resource"
    // },
    // "space.bilibili.com": {
    //     "/:uid": "/bilibili/user/coin/:uid",
    //     "/:userid": "/bilibili/user/fav/:userid"
    //     //TODO: it seems that route-recongnizer didn't recognize '#' correctly
    //     // "/:uid/#/dynamic": "/bilibili/user/dynamic/:uid",
    //     // "/:uid/#/article": "/bilibili/:uid",
    //     // "/:uid/#/favlist?fid=:fid": "/bilibili/fav/:uid/:fid",
    //     // "/:uid/#/fans/fans": "/bilibili/user/followers/:uid",
    //     // "/:uid/#/fans/follow": "/bilibili/user/followings/:uid",
    //     // "/:uid/#/channel/detail?cid=:cid": "/bilibili/channel/:uid/:cid",
    //     // "/:uid/#/favlist": "/bilibili/user/fav/:uid",
    // },
    // "www.bilibili.com": {
    //     //TODO: it seems that route-recongnizer didn't recognize '#' correctly
    //     //"/blackboard/topic_list.html#/": "/bilibili/blackboard",
    //     "/ranking/all/:rid/0/:day": "/bilibili/ranking/:rid/:day",
    //     //TODO: route-recoginizer doesn' recognize pattern like this
    //     //"/video/:aid": "/bilibili/video/reply/:aid"
    //     //TODO: cannot encode and decode here
    //     //"/v/:name": ""
    // },
    // "bangumi.bilibili.com": {
    //     //TODO: doesn't support
    //     "/anime/:seasonid/": "/bilibili/bangumi/:seasonid"
    // },
    // "link.bilibili.com": {
    //     //TODO: too complex QAQ
    //     "/p/eden/news#/?tab=$:product&tag=all&page_no=1": "/bilibili/link/news/:product"
    // },
    // "live.bilibili.com": {
    //     //TODO: bug here
    //     "/:areaID": "/bilibili/live/area/:areaID/live_time",
    //     "/:areaid": "/bilibili/live/area/:areaid/online",
    //     "/:roomID": "/bilibili/live/room/:roomID"
    // },
    // "search.bilibili.com": {
    //     //TODO: too complex QAQ
    //     "/api/search?search_type=live_room&keyword=:urlEncodedKey&order=:order&coverType=user_cover&page=1": "bilibili/live/search/:key/:order"
    // },
    // "mall.bilibili.com": {
    //     //TODO: URL doesn't match
    //     //"/list.html?ip=:id": "/bilibili/mall/ip/:id",
    //     //"/date.html?page=new":"/bilibili/mall/new"
    // },
    // "news.cctv.com": {
    //     "/:category/index.shtml": "/cctv/:category"
    // }
};