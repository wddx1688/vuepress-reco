module.exports = {
  "title": "免费机场每日分享",
  "description": "精选优质免费机场试用，每日更新，让您的网络访问更自由",
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
        "content": "免费机场,免费VPN,免费代理,机场试用,科学上网,翻墙工具"
      }
    ],
    [
      "meta",
      {
        "property": "og:title",
        "content": "免费机场每日分享"
      }
    ],
    [
      "meta",
      {
        "property": "og:description",
        "content": "精选优质免费机场试用，每日更新"
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
        "text": "今日推荐",
        "link": "/blogs/daily/",
        "icon": "reco-date"
      },
      {
        "text": "机场分类",
        "icon": "reco-category",
        "items": [
          {
            "text": "高速机场",
            "link": "/blogs/high-speed/"
          },
          {
            "text": "稳定机场",
            "link": "/blogs/stable/"
          },
          {
            "text": "游戏专用",
            "link": "/blogs/gaming/"
          },
          {
            "text": "流媒体专用",
            "link": "/blogs/streaming/"
          },
          {
            "text": "所有机场",
            "link": "/blogs/airports/"
          }
        ]
      },
      {
        "text": "使用教程",
        "icon": "reco-document",
        "items": [
          {
            "text": "Windows教程",
            "link": "/blogs/tutorials/windows/"
          },
          {
            "text": "macOS教程",
            "link": "/blogs/tutorials/macos/"
          },
          {
            "text": "iOS教程",
            "link": "/blogs/tutorials/ios/"
          },
          {
            "text": "Android教程",
            "link": "/blogs/tutorials/android/"
          }
        ]
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
            ["yesterday", "昨日推荐"],
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
            ["high-speed", "高速机场"],
            ["stable", "稳定机场"],
            ["gaming", "游戏专用"],
            ["streaming", "流媒体专用"]
          ]
        }
      ],
      "/blogs/tutorials/": [
        {
          "title": "使用教程",
          "collapsable": false,
          "children": [
            ["", "教程总览"],
            ["windows/", "Windows教程"],
            ["macos/", "macOS教程"],
            ["ios/", "iOS教程"],
            ["android/", "Android教程"]
          ]
        }
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "机场分类"
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
        "email": "test@example.com",
        "link": "https://example.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最后更新",
    "author": "机场分享站",
    "authorAvatar": "/avatar.png",
    "record": "免费机场分享",
    "startYear": "2024"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ["@vuepress/plugin-back-to-top"],
    ["@vuepress/plugin-nprogress"],
    ["vuepress-plugin-code-copy", {
      "successText": "复制成功！",
      "failText": "复制失败！",
      "showInMobile": true
    }],
    ["@vuepress/plugin-medium-zoom"],
    ["@vuepress/plugin-last-updated", {
      "transformer": (timestamp) => {
        const moment = require('moment');
        moment.locale('zh-CN');
        return moment(timestamp).format('YYYY年MM月DD日 HH:mm');
      }
    }],
    ["vuepress-plugin-reading-progress"],
    ["@vuepress/plugin-pwa", {
      "serviceWorker": true,
      "updatePopup": {
        "message": "发现新内容可用",
        "buttonText": "刷新"
      }
    }]
  ]
}
