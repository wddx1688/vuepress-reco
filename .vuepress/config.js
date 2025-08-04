module.exports = {
  "title": "免费机场每日分享",
  "description": "出海第一站，从这里开始！精选优质免费机场试用，每日更新。",
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
        "content": "免费机场,免费VPN,免费代理,机场试用,科学上网,翻墙工具,出海工具"
      }
    ],
    [
      "meta",
      {
        "property": "og:title",
        "content": "免费机场每日分享 - 出海第一站"
      }
    ],
    [
      "meta",
      {
        "property": "og:description", 
        "content": "精选优质免费机场试用，每日更新，让您的网络访问更自由"
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
        "text": "每日推荐",
        "link": "/blogs/daily/",
        "icon": "reco-date"
      },
      {
        "text": "免费试用",
        "link": "/blogs/free/",
        "icon": "reco-api"
      },
      {
        "text": "付费机场",
        "link": "/blogs/premium/",
        "icon": "reco-other"
      },
      {
        "text": "关于我们",
        "link": "/blogs/about/",
        "icon": "reco-message"
      }
    ],
    "sidebar": {
      "/blogs/daily/": [
        {
          "title": "每日推荐",
          "collapsable": false,
          "children": [
            ["", "今日推荐"],
            ["archive", "历史推荐"]
          ]
        }
      ],
      "/blogs/free/": [
        {
          "title": "免费试用",
          "collapsable": false,
          "children": [
            ["", "所有免费机场"]
          ]
        }
      ],
      "/blogs/premium/": [
        {
          "title": "付费机场",
          "collapsable": false,
          "children": [
            ["", "所有付费机场"]
          ]
        }
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
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
        const moment = require('moment');
        moment.locale('zh-CN');
        return moment(timestamp).format('YYYY年MM月DD日 HH:mm');
      }
    }]
  ]
}
