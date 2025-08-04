module.exports = {
  "title": "免费机场分享站",
  "description": "自由上网，从这里开始！精选优质免费机场，持续更新。",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "meta",
      {
        "name": "keywords",
        "content": "免费机场,免费VPN,免费代理,机场,科学上网,翻墙工具,出海工具"
      }
    ],
    [
      "meta",
      {
        "property": "og:title",
        "content": "免费机场分享站 - 自由上网，从这里开始！"
      }
    ],
    [
      "meta",
      {
        "property": "og:description", 
        "content": "精选优质免费机场，持续更新，让您的网络访问更自由"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "免费机场",
        "link": "/blogs/free/",
        "icon": "reco-api"
      },
      {
        "text": "网址导航",
        "link": "/blogs/navigation/",
        "icon": "reco-other"
      },
      {
        "text": "关于我们",
        "link": "/blogs/about/",
        "icon": "reco-message"
      }
    ],
    "sidebar": {
      "/blogs/free/": [
        {
          "title": "免费机场",
          "collapsable": false,
          "children": [
            ["", "所有免费机场"]
          ]
        }
      ],
      "/blogs/navigation/": [
        {
          "title": "网址导航",
          "collapsable": false,
          "children": [
            ["", "常用工具"]
          ]
        }
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": -1
      },
      "tag": {
        "location": -1
      },
      "socials": {
        "github": "wddx1688/vuepress-reco",
        "gitee": "",
        "qq": "",
        "wechat": "",
        "zhihu": "",
        "toutiao": "",
        "juejin": "",
        "segmentfault": "",
        "bilibili": "",
        "youtube": "",
        "email": ""
      },
      "sitemap": {
        "hostname": "https://impress.edgeone.app"
      },
      "feed": {
        "canonical_url": "https://impress.edgeone.app",
        "count": 100
      },
      "pagination": {
        "perPage": 6
      },
      "archive": {
        "location": 1,
        "text": "归档"
      }
    },
    "friendLink": [
      {
        "title": "机场测速",
        "desc": "专业的机场测速工具",
        "link": "https://example.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最后更新",
    "author": "免费机场分享站",
    "authorAvatar": "/avatar.png",
    "record": "免费机场分享",
    "startYear": "2024",
    "mode": "light",
    "modePicker": false
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ["@vuepress/plugin-back-to-top"],
    ["@vuepress/plugin-nprogress"],
    ["@vuepress/plugin-medium-zoom"],
    ["@vuepress/plugin-last-updated", {
      "transformer": (timestamp) => {
        const moment = require("moment");
        moment.locale("zh-CN");
        return moment(timestamp).format("YYYY年MM月DD日 HH:mm");
      }
    }]
  ]
}
