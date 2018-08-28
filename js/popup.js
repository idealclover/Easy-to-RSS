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
