# Easy-to-RSS

> 🚀 RSS IS EASY!

Easy-to-RSS 是一个一键式发现当前网页RSS的 chrome/firefox extension，~~计划~~与[RSSHub](https://github.com/DIYgod/RSSHub)联动并支持更多网页。

[English Docs](https://github.com/idealclover/Easy-to-RSS/blob/master/README_EN.md)

## Demo

功能：获取网页RSS，复制到剪贴板并打开该RSS网页。

如果该网站自带RSS，Easy-to-RSS将获取该网站自带RSS：

Example website: https://blog.idealclover.top

![demo-origin.png](./pics/demo-origin.png)

**同时** 如果该网站被[RSSHub](https://github.com/DIYgod/RSSHub)收录，Easy-to-RSS将获取该网站在RSSHub中的地址：

Example website: http://news.cctv.com/tech/index.shtml

![demo-rsshub.png](./pics/demo-rsshub.png)

当前支持一键[RSSHub](https://github.com/DIYgod/RSSHub)订阅的网站：

* Bilibili: 用户投币视频，用户收藏夹
* 3dm game: 完全支持
* 简书: 完全支持
* 知乎：完全支持
* 微博：完全支持
* GitHub: issues
* 即刻：完全支持
* 微信公众号（瓦斯方式）：完全支持
* Instagram：完全支持
* twitter：完全支持
* Youtube: 完全支持

## How to Use

> 项目还出于demo开发阶段，especially 对RSSHub的支持还有bug ，请给 ~~没学过web开发并且学业繁忙甚至不是计算机专业的~~ 作者一点时间！

### Chrome

**Chrome store**

[点击下载安装（需翻墙）](https://chrome.google.com/webstore/detail/easy-to-rss/hbcmpkcpbnecinpngdnfbnknfkdpdfli)

或在[chrome应用商店](https://chrome.google.com/webstore)直接搜索*easy to RSS*

**安装包下载安装**

[v0.1.1下载](https://github.com/idealclover/Easy-to-RSS/releases/download/v0.1.0/Easy-to-RSS.crx)

1. 在[release](https://github.com/idealclover/Easy-to-RSS/releases)页面下载*Easy-to-RSS.crx*文件
2. 转到chrome右上角的*更多工具-扩展程序*
3. 将下载的.crx文件拖入浏览器，提示安装并点击确定
4. Finished! 开启轻松的RSS之旅吧！

### Firefox

**Firefox addons**

[点击下载安装](https://addons.mozilla.org/zh-CN/firefox/addon/easy-to-rss/)

### Examples

> Tips: Github语法不支持在新标签页打开链接，建议以下示例链接使用 **ctrl**  + click 的方式，在新标签页内打开链接

安装成功后，是不是急切地想体验一键RSS的感觉啦！以下这些**RSSHub生成**的网站也许适合你哦~

* Bilibili: [用户动态](https://space.bilibili.com/5044093/#/) [用户投稿视频](https://space.bilibili.com/5044093/#/) [用户专栏文章](https://space.bilibili.com/5044093/#/) [用户投币视频](https://space.bilibili.com/5044093/#/) [用户收藏夹](https://space.bilibili.com/5044093/#/) [用户粉丝](https://space.bilibili.com/5044093/#/) [用户收藏夹](https://space.bilibili.com/5044093/#/) [用户关注用户](https://space.bilibili.com/5044093/#/)
* 3dm: [全区新闻](https://www.3dmgame.com/news/) [游戏新闻](https://www.3dmgame.com/games/civilization6/news/) [游戏攻略](https://www.3dmgame.com/games/civilization6/gl/) [游戏资源](https://www.3dmgame.com/games/civilization6/resource/)
* 简书: [简书作者](https://www.jianshu.com/u/3460d089ffd3) [简书首页](https://www.jianshu.com) [7日热门](https://www.jianshu.com/trending/weekly) [简书专题](https://www.jianshu.com/c/yD9GAd) [30日热门](https://www.jianshu.com/trending/monthly)
* 知乎 [用户动态](https://www.zhihu.com/people/cuicuijiang/activities) [用户回答](https://www.zhihu.com/people/cuicuijiang/answers) [收藏夹](https://www.zhihu.com/collection/41893350) [知乎日报](https://daily.zhihu.com/)
* 微博 [微博博主](https://www.weibo.com/u/5229305350) [搜索结果](http://s.weibo.com/weibo/%25E5%25A5%25B3%25E8%25A3%2585)
* Github: [Issues](https://github.com/idealclover/Easy-to-RSS/issues)
* 即刻：[主题精选](https://web.okjike.com/topic/564ab85208987312006e13ab/official) [用户动态](https://web.okjike.com/user/82D23B32-CF36-4C59-AD6F-D05E3552CBF3)
* 微信公众号（瓦斯方式）：[公众号](https://wx.qnmlgb.tech/authors/5b575ec958e5c4583338dff7)
* Instagram: [用户动态](https://www.instagram.com/snatti89/)
* Twitter: [用户动态](https://twitter.com/idealclover)
* Youtube: [用户动态](https://www.youtube.com/user/crashcourse) [频道动态](https://www.youtube.com/channel/UCX6b17PVsYBQ0ip5gyeme-Q)

**此外**，还有这样一些良心的网站自己提供了RSS，也可以尝试~

~~我才不会说当年在RSSHub上提了不知道多少自带RSS源的愚蠢Issues~~

* ~~为女朋友特意加进来的~~ Lofter: [博主主页](http://idealclover.lofter.com/)
* Reddit (惨遭GFW): [首页](https://www.reddit.com/) [话题](https://www.reddit.com/r/changemyview/)

还有各种各样厉害的博主啦~如果他们的网站自带RSS的话，比如 [这个人](https://idealclover.top)（逃

**另外**，在设置页面也可以自定义RSSHub地址。**强烈推荐自建RSSHub**，在稳定性更好的同时，避免增加RSSHub作者[DIYgod](https://github.com/DIYgod)的负担。**爱护DIYgod，人人有责**

![demo-settings.png](./pics/demo-settings.png)

## Planned Features

- [x] Click to copy
- [ ] Add RSSHub routers
- [x] Configure RSSHub root URL
- [ ] Fully compatible with RSSHub
- [ ] More routers and channels

## Contribute

**调试方法：**

1. Clone this repository.
2. 转到chrome右上角的*更多工具-扩展程序*
3. 在拓展页右上角启用开发者模式
4. 加载已解压的扩展程序

如果有任何想法或需求，可以在 [issue](https://github.com/idealclover/Easy-to-RSS/issues) 中告诉我们，同时我们欢迎各种 pull requests

目前最主要的工作是及时更新 [js/data.js](https://github.com/idealclover/Easy-to-RSS/blob/master/js/data.js) 中的router数据。

## Open-source Licenses

This project is under MIT license, feel free to use it under the license.

Also this project is based on [get-rss-feed-url-extension](https://github.com/shevabam/get-rss-feed-url-extension) and [route-recognizer](https://github.com/tildeio/route-recognizer), and thanks to [RSSHub](https://github.com/DIYgod/RSSHub).

Long live RSS.
