chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'searchRSS') {
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
        links = document.querySelectorAll('link[type]')
        feeds = [];
        for (var i = 0; i < links.length; i++) {
            if (links[i].hasAttribute('type') && types.indexOf(links[i].getAttribute('type')) !== -1) {
                var feed_url = links[i].getAttribute('href');

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
        sendResponse(feeds);
    }
});
