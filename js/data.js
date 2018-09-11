var data = {
    "www.3dmgame.com": [
        {
            "name": "3dm全区新闻",
            "src": "/news",
            "dst": "/3dm/news"
        },
        {
            "name": ":name的游戏新闻",
            "src": "/games/:name/news",
            "dst": "/3dm/:name/news"
        },
        {
            "name": ":name的游戏攻略",
            "src": "/games/:name/gl",
            "dst": "/3dm/:name/gl"
        },
        {
            "name": ":name的游戏资源",
            "src": "/games/:name/resource",
            "dst": "/3dm/:name/resource"
        }
    ],
    "news.cctv.com": [
        {
            "name": "央视新闻:category板块",
            "src": "/:category/index.shtml",
            "dst": "/cctv/:category"
        }
    ],

    //Bilibili
    "space.bilibili.com": [
        {
            "name": "bilibili用户投币视频",
            "src": "/:uid",
            "dst": "/bilibili/user/coin/:uid"
        },
        {
            "name": "bilibili用户收藏夹",
            "src": ":userid",
            "dst": "/bilibili/user/fav/:userid"
        }
    ],

    //即刻
    "web.okjike.com": [
        {
            "name": "主题精选RSS",
            "src": "/topic/:id/official",
            "dst": "/jike/topic/:id"
        },
        {
            "name": "主题广场RSS",
            "src": "/topic/:id/user",
            "dst": "/jike/topic/:id"
        },
        {
            "name": "用户动态RSS",
            "src": "/user/:id",
            "dst": "/jike/user/:id"
        }
    ],

    //微信公众号（瓦斯）
    "wx.qnmlgb.tech": [
        {
            "name": "公众号RSS",
            "src": "/authors/:id",
            "dst": "/wechat/wasi/:id"
        }
    ],

    //简书
    "www.jianshu.com": [
        {
            "name": "简书首页",
            "src": "/",
            "dst": "/jianshu/home"
        },
        {
            "name": "简书7日热门",
            "src": "/trending/weekly",
            "dst": "/jianshu/trending/weekly"
        },
        {
            "name": "简书30日热门",
            "src": "/trending/monthly",
            "dst": "/jianshu/trending/monthly"
        },
        {
            "name": "简书专题RSS",
            "src": "/c/:id",
            "dst": "/jianshu/collection/:id"
        },
        {
            "name": "简书作者RSS",
            "src": "/u/:id",
            "dst": "/jianshu/user/:id"
        }
    ],

    //知乎
    "www.zhihu.com": [
        {
            "name": "知乎收藏夹",
            "src": "/collection/:id",
            "dst": "/zhihu/collection/:id"
        },
        {
            "name": "知乎用户:id的动态",
            "src": "/people/:id/activities",
            "dst": "/zhihu/people/activities/:id"
        },
        {
            "name": "知乎用户:id的回答",
            "src": "/people/:id/answers",
            "dst": "/zhihu/people/answers/:id"
        },
        {
            "name": "知乎用户:id的专栏",
            "src": "/people/:id/zhuanlan",
            "dst": "/zhihu/people/zhuanlan/:id"
        }
    ],
    "daily.zhihu.com": [
        {
            "name": "知乎日报",
            "src": "/",
            "dst": "/zhihu/daily"
        }
    ],

    //微博
    "weibo.com": [
        {
            "name": "博主动态RSS",
            "src": "/u/:uid",
            "dst": "/weibo/user/:uid"
        }
    ],
    "s.weibo.com": [
        {
            "name": "关键字搜索结果",
            "src": "/weibo/:keyword",
            "dst": "/weibo/keyword/:keyword"
        }
    ],

    //GitHub
    "github.com": [
        {
            "name": "Issues of :repo",
            "src": "/:user/:repo/issues",
            "dst": "/github/issue/:user/:repo"
        }
    ],

    //twitter
    "twitter.com": [
        {
            "name": "twitter用户动态",
            "src": "/:user",
            "dst": "/twitter/user/:id"
        }
    ]

    //Instagram
    "www.instagram.com": [
        {
            "name": "instagram用户动态",
            "src": "/:user",
            "dst": "/instagram/user/:id"
        }
    ]
};

// the old format of data
// var data = {
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
