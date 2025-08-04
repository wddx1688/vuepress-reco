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
        "location": -1 // 不在导航栏显示分类
      },
      "tag": {
        "location": -1 // 不在导航栏显示标签
      },
      "socials": { // 社交链接，可以根据需要添加或删除
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
      "sitemap": { // 站点地图配置，有助于SEO
        "hostname": "https://impress.edgeone.app"
      },
      "feed": { // RSS订阅配置
        "canonical_url": "https://impress.edgeone.app",
        "count": 100 // 最多生成100篇文章的RSS
      },
      "pagination": { // 分页配置
        "perPage": 6 // 每页显示6篇文章
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
    "mode": "auto", // 自动切换黑夜/白天模式
    "modePicker": true, // 显示黑夜/白天模式切换按钮
    "bulletin": { // 公告栏配置
      "body": [
        {
          "type": "text",
          "content": "🎉 欢迎来到免费机场分享站！本站每日更新免费机场信息，助您轻松上网。",
          "style": "font-size: 14px; color: #333;"
        },
        {
          "type": "text",
          "content": "⚠️ 请注意：本站所有机场信息仅供学习和研究使用，请遵守当地法律法规。",
          "style": "font-size: 12px; color: #666;"
        },
        { "type": "hr" },
        { "type": "title", "content": "📢 最新公告" },
        {
          "type": "text",
          "content": "• [2024-08-04] 网站已更新，提供更简洁的界面和更专注的内容。",
          "style": "font-size: 12px;"
        },
        {
          "type": "text",
          "content": "• [2024-08-03] 新增多个高速稳定免费机场，欢迎体验。",
          "style": "font-size: 12px;"
        },
        { "type": "hr" },
        {
          "type": "buttongroup",
          "children": [
            {
              "text": "查看免费机场",
              "link": "/blogs/free/"
            },
            {
              "text": "联系我们",
              "link": "/blogs/about/"
            }
          ]
        }
      ]
    }
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
