<h1 align="center">Welcome to sz-vaccine ð</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/flytam/sz-vaccine" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> æ·±å³ç«èèªå¨å·å·æéå·¥å·ï¼å·å°ç«èæå·åä¼é®ä»¶éç¥

### ð  [Homepage](https://github.com/flytam/sz-vaccine)

### â¨ [Demo](https://github.com/flytam/sz-vaccine)

## å®è£

```sh
git clone https://github.com/flytam/sz-vaccine.git

npm install
```

## ä½¿ç¨

1. è·åé®ç®±ææç ç¨äºåéæå·éç¥ãå¦ QQ é®ç®±çè·åæ¹å¼[åè](https://service.mail.qq.com/cgi-bin/help?subtype=1&id=28&no=1001256)

2. è·åæ¥è¯¢ tokenãå¾®ä¿¡å¬ä¼å·ãæ·±å³ç¾æ§ã->ãæç«èã->ãä¸ªäººé¢çº¦æ°å ç«èã->ãä¸ä¸æ­¥ã->ãä¸ªäººé¢çº¦ããç¹å»ææºå³ä¸è§çä¸ä¸ªç¹ï¼å¤å¶é¾æ¥ï¼~~æ url ä¸ç token ååºæ¥ãè¿ä¸ª token æ¯ä¸ä¸ª`-t-`å¼å¤´çå­ç¬¦ä¸²~~ï¼6.5 æ´æ°ï¼ï¼æµè§å¨æå¼å¤å¶åºæ¥ç urlï¼F12 æå¼ consoleï¼è¾å¥`window.getUrlArgObject("token")`æ¿å° token

![image](https://user-images.githubusercontent.com/20512530/120893876-017f5880-c648-11eb-955d-d4258b5ee20b.png)

3. å¨é¡¹ç®æ ¹ç®å½æ°å»ºä¸ä¸ª`config.json`å¦ä¸ï¼æ ·ä¾åå­æ®µè¯´æ

-   regionï¼ åªäºå°åºçç«èãå¦ åå±±åºãç¦ç°åºãå®å®åºãé¾å²åºç­
-   corpï¼ ç«èåç§°ï¼åèç½é¡µç«¯çåç§°ï¼å¦ åäº¬çç©ãæ­¦æ±çç©ãç§å´ä¸­ç»´ãåº·å¸è¯ºçç©ãå®å¾½æºé£
-   email ç¨äºåéçé®ç®±ï¼å¯¹åºææç 
-   passCode é®ç®±ææç ã
-   receives æ¶ä»¶äººé®ç®±ï¼string[]
-   interval æ¶é´é´éãåä½ç§
-   token æ¥è¯¢ token
-   cooldownTime æ¥å°æä½éåï¼æ¥è¯¢çå·å´æ¶é´

```json
{
    "region": ["åå±±åº", "å®å®åº", "ç¦ç°åº"],
    "corp": ["ç§å´ä¸­ç»´"],
    "email": "xxx@qq.com",
    "receives": ["xx@qq.com"],
    "passCode": "xxxx",
    "token": "-t-xxxx",
    "interval": 30,
    "cooldownTime": 3600
}
```

```sh
# ç´æ¥è¿è¡
npm run start
# æèpm2æ§è¡
# pm2æ¥è¯¢æ¥å¿./logs/err.log
npm run pm2:start
# pm2 stop
npm run pm2:stop
```

## å«ä¸é¢å¤ªéº»ç¦ç³»å

TODO

## Author

ð¤ **flytam**

-   Website: github.com/flytam/blog
-   Github: [@flytam](https://github.com/flytam)

## æç¤º

ä»ä¾å­¦ä¹ äº¤æµä½¿ç¨ï¼è¯·å¿ç¨äºéæ³ç¨éãé²ç«ä¸¥å³»ï¼å¸æå¤§å®¶é½è½å°½å¿«æä¸ç«è
