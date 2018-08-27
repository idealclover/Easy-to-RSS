var data = {
    "www.3dmgame.com": {
        "/news": "/3dm/news",
        "/games/:name/news": "/3dm/:name/news",
        "/games/:name/gl": "/3dm/:name/gl",
        "/games/:name/resource": "/3dm/:name/resource"
    },
    "space.bilibili.com": {
        "/:uid": "/bilibili/user/coin/:uid",
        "/:userid": "/bilibili/user/fav/:userid"
        //TODO: it seems that route-recongnizer didn't recognize '#' correctly
        // "/:uid/#/dynamic": "/bilibili/user/dynamic/:uid",
        // "/:uid/#/article": "/bilibili/:uid",
        // "/:uid/#/favlist?fid=:fid": "/bilibili/fav/:uid/:fid",
        // "/:uid/#/fans/fans": "/bilibili/user/followers/:uid",
        // "/:uid/#/fans/follow": "/bilibili/user/followings/:uid",
        // "/:uid/#/channel/detail?cid=:cid": "/bilibili/channel/:uid/:cid",
        // "/:uid/#/favlist": "/bilibili/user/fav/:uid",
    },
    "www.bilibili.com": {
        //TODO: it seems that route-recongnizer didn't recognize '#' correctly
        //"/blackboard/topic_list.html#/": "/bilibili/blackboard",
        "/ranking/all/:rid/0/:day": "/bilibili/ranking/:rid/:day",
        //TODO: route-recoginizer doesn' recognize pattern like this
        //"/video/:aid": "/bilibili/video/reply/:aid"
        //TODO: cannot encode and decode here
        //"/v/:name": ""
    },
    "bangumi.bilibili.com": {
        //TODO: doesn't support
        "/anime/:seasonid/": "/bilibili/bangumi/:seasonid"
    },
    "link.bilibili.com": {
        //TODO: too complex QAQ
        "/p/eden/news#/?tab=$:product&tag=all&page_no=1": "/bilibili/link/news/:product"
    },
    "live.bilibili.com": {
        //TODO: bug here
        "/:areaID": "/bilibili/live/area/:areaID/live_time",
        "/:areaid": "/bilibili/live/area/:areaid/online",
        "/:roomID": "/bilibili/live/room/:roomID"
    },
    "search.bilibili.com": {
        //TODO: too complex QAQ
        "/api/search?search_type=live_room&keyword=:urlEncodedKey&order=:order&coverType=user_cover&page=1": "bilibili/live/search/:key/:order"
    },
    "mall.bilibili.com": {
        //TODO: URL doesn't match
        //"/list.html?ip=:id": "/bilibili/mall/ip/:id",
        //"/date.html?page=new":"/bilibili/mall/new"
    },
    "news.cctv.com": {
        "/:category/index.shtml": "/cctv/:category"
    }
};

var root = 'https://rsshub.app';

function searchRSSHub(url, callback) {
    var feeds = [];
    for (var key in data) {
        var regex = new RegExp(key + '(\\S*)');
        var path = url.match(regex);
        if (path === null) {
            continue;
        }
        console.log(path);
        path = path[1];
        var results = [];

        var router = {};
        for (var src in data[key]) {
            router = new RouteRecognizer();
            router.add([{path: src, handler: data[key][src]}]);
            var result = router.recognize(path);
            console.log(result);
            if (result) {
                console.log(result);
                results.push(result[0]);
            }
            router = {};
        }

        console.log(results);

        for (var i = 0; i < results.length; i++) {
            var rst = results[i].handler;
            for (var param in results[i].params) {
                rst = rst.replace(':' + param, results[i].params[param]);
            }
            var feed_url = (root + rst);
            var feed = {
                type: '',
                url: feed_url,
                title: 'RSSHub: ' + feed_url
            };
            feeds.push(feed);
        }
    }
    callback(feeds);
}

function searchOriginRSS(url, callback) {
    var x = new XMLHttpRequest();
    x.open('GET', url);
    x.responseType = '';
    x.onload = function () {
        var feeds = [];
        var types = [
            'application/rss+xml',
            'application/atom+xml',
            'application/rdf+xml',
            'application/rss',
            'application/atom',
            'application/rdf',
            'text/rss+xml',
            'text/atom+xml',
            'text/rdf+xml',
            'text/rss',
            'text/atom',
            'text/rdf'
        ];

        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(x.responseText, "text/html");
        var links = htmlDoc.querySelectorAll("link[type]");

        for (var i = 0; i < links.length; i++) {
            if (links[i].hasAttribute('type') && types.indexOf(links[i].getAttribute('type')) !== -1) {
                var feed_url = links[i].getAttribute('href');

                console.log(feed_url);

                // If feed's url starts with "//"
                if (feed_url.indexOf("//") === 0)
                    feed_url = "http:" + feed_url;
                // If feed's url starts with "/"
                else if (feed_url.startsWith('/'))
                    feed_url = url.split('/')[0] + '//' + url.split('/')[2] + feed_url;
                // If feed's url starts with http or https
                else if (/^(http|https):\/\//i.test(feed_url))
                    feed_url = feed_url;
                else
                    feed_url = url + "/" + feed_url.replace(/^\//g, '');

                var feed = {
                    type: links[i].getAttribute('type'),
                    url: feed_url,
                    title: 'Origin: ' + (links[i].getAttribute('title') || feed_url)
                };

                feeds.push(feed);
            }
        }
        callback(feeds);
    };

    x.onerror = function () {
        return [];
    };

    x.send();
}

/**
 * Prints message in #feeds
 */
function render(msg) {
    document.getElementById('feeds').innerHTML = msg;
}

function addFeeds(feeds, html, count, callback) {
    for (var i = 0; i < feeds.length; i++) {
        html += '<li><a href="' + feeds[i].url + '" title="' + feeds[i].type + '" target="_blank">' + feeds[i].title + '</a></li>';
    }

    count--;

    if (count <= 0) {
        if (html === '') {
            render("No feeds found");
        } else {
            render('<ul>' + html + '</ul>');
        }
    }

    callback(count, html);
}

document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var tab = tabs[0];
        var url = tab.url;
        var count = 2;
        var html = '';

        // Check if it's in RSSHub
        searchRSSHub(url, function (feeds) {
            addFeeds(feeds, html, count, function (n_count, n_html) {
                count = n_count;
                html = n_html;
            });
        });

        // Check its original RSS
        searchOriginRSS(url, function (feeds) {
            addFeeds(feeds, html, count, function (n_count, n_html) {
                count = n_count;
                html = n_html;
            });
        });
    });
});
