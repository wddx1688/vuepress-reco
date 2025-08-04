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
        "items": [
          {
            "text": "2025年",
            "items": [
              {
                "text": "8月",
                "link": "/blogs/vpn/2025/08.html"
              },
              {
                "text": "7月", 
                "link": "/blogs/vpn/2025/07.html"
              },
              {
                "text": "6月", 
                "link": "/blogs/vpn/2025/06.html"
              }
            ]
          },
          {
            "text": "2024年",
            "items": [
              {
                "text": "12月",
                "link": "/blogs/vpn/2024/12.html"
              },
              {
                "text": "11月",
                "link": "/blogs/vpn/2024/11.html"
              }
            ]
          }
        ],
        "icon": "reco-api"
      },
      {
        "text": "网址导航",
        "link": "/blogs/navigation/",
        "icon": "reco-other"
      },
      {
        "text": "软件列表",
        "link": "/blogs/software/",
        "icon": "reco-coding"
      }
    ],
    "sidebar": {
      "/blogs/vpn/": [
        {
          "title": "2025年",
          "collapsable": false,
          "children": [
            ["2025/08", "8月"],
            ["2025/07", "7月"],
            ["2025/06", "6月"]
          ]
        },
        {
          "title": "2024年", 
          "collapsable": false,
          "children": [
            ["2024/12", "12月"],
            ["2024/11", "11月"]
          ]
        }
      ],
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
      ],
      "/blogs/software/": [
        {
          "title": "软件列表",
          "collapsable": false,
          "children": [
            ["", "常用软件"]
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
    "mode": "auto",
    "modePicker": true
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ["@vuepress/plugin-back-to-top"],
    ["@vuepress/plugin-nprogress"],
    ["@vuepress/plugin-medium-zoom"]
  ]
}

