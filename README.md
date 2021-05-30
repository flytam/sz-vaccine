<h1 align="center">Welcome to sz-vaccine 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/flytam/sz-vaccine" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> 深圳疫苗自动刷号提醒工具，刷到疫苗有号后会邮件通知

### 🏠 [Homepage](https://github.com/flytam/sz-vaccine)

### ✨ [Demo](https://github.com/flytam/sz-vaccine)

## 安装

```sh
git clone https://github.com/flytam/sz-vaccine.git

npm install
```

## 使用

1. 获取邮箱授权码用于发送有号通知。如 QQ 邮箱的获取方式[参考](https://service.mail.qq.com/cgi-bin/help?subtype=1&id=28&no=1001256)

2. 获取查询 token。微信公众号「深圳疾控」->「打疫苗」->「个人预约新冠疫苗」->「下一步」->「个人预约」。点击手机右上角的三个点，复制链接，把 url 上的 token 取出来。这个 token 是一个`-t-`开头的字符串

3. 在项目根目录新建一个`config.json`如下，样例和字段说明

-   region： 哪些地区的疫苗。如 南山区、福田区、宝安区、龙岗区等
-   corp： 疫苗名称，参考网页端的名称，如 北京生物、武汉生物、科兴中维、康希诺生物、安徽智飞
-   email 用于发送的邮箱，对应授权码
-   passCode 邮箱授权码。
-   receives 收件人邮箱，string[]
-   interval 时间间隔。单位秒
-   token 查询 token
-   cooldownTime 查到有余量后，查询的冷却时间

```json
{
    "region": ["南山区", "宝安区", "福田区"],
    "corp": ["科兴中维"],
    "email": "xxx@qq.com",
    "receives": ["xx@qq.com"],
    "passCode": "xxxx",
    "token": "-t-xxxx",
    "interval": 30,
    "cooldownTime": 3600
}
```

```sh
# 直接运行
npm run start
# 或者pm2执行
# pm2查询日志./logs/err.log
npm run pm2:start
# pm2 stop
npm run pm2:stop
```

## 嫌上面太麻烦系列

TODO

## Author

👤 **flytam**

-   Website: github.com/flytam/blog
-   Github: [@flytam](https://github.com/flytam)

## 提示

仅供学习交流使用，请勿用于非法用途。防疫严峻，希望大家都能尽快打上疫苗
