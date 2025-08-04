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
        "text": "机场推荐",
        "icon": "reco-api",
        "items": [
          {
            "text": "今日推荐",
            "link": "/blogs/daily/"
          },
          {
            "text": "高速机场",
            "link": "/blogs/airports/high-speed/"
          },
          {
            "text": "稳定机场", 
            "link": "/blogs/airports/stable/"
          },
          {
            "text": "游戏专用",
            "link": "/blogs/airports/gaming/"
          },
          {
            "text": "所有机场",
            "link": "/blogs/airports/"
          }
        ]
      },
      {
        "text": "软件列表",
        "icon": "reco-document",
        "items": [
          {
            "text": "Windows软件",
            "link": "/blogs/software/windows/"
          },
          {
            "text": "macOS软件",
            "link": "/blogs/software/macos/"
          },
          {
            "text": "移动端软件",
            "link": "/blogs/software/mobile/"
          },
          {
            "text": "所有软件",
            "link": "/blogs/software/"
          }
        ]
      },
      {
        "text": "网址导航",
        "link": "/blogs/navigation/",
        "icon": "reco-other"
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
      "/blogs/airports/": [
        {
          "title": "机场分类",
          "collapsable": false,
          "children": [
            ["", "所有机场"],
            ["high-speed/", "高速机场"],
            ["stable/", "稳定机场"],
            ["gaming/", "游戏专用"],
            ["streaming/", "流媒体专用"]
          ]
        }
      ],
      "/blogs/software/": [
        {
          "title": "软件分类",
          "collapsable": false,
          "children": [
            ["", "所有软件"],
            ["windows/", "Windows软件"],
            ["macos/", "macOS软件"],
            ["mobile/", "移动端软件"]
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
    // 自定义样式
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
