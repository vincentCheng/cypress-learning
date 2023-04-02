# 参考文献：

- [掘金 1](https://juejin.cn/post/7168022965517287438#heading-7)
- [B 站的 cypress 和 jest 教学视频](https://www.bilibili.com/video/BV1d24y1C7NX/?spm_id_from=333.788&vd_source=59fab4ae7f7b6462cea577f55587fe78)
- [cypress 自动化测试](https://www.bilibili.com/video/BV14r4y1774N/?p=2&spm_id_from=pageDriver&vd_source=59fab4ae7f7b6462cea577f55587fe78)

## cy.mount 报错

- 在 tsconfig.json 中添加

```js
  "include": ["src", "cypress/support/component.ts"],
```

## 代码提示

- 方式 1：代码中添加

```
/// <reference types="Cypress"/>
```

- 方式 2：jsconfig.json 中添加

```json
{
  "include": ["/node_modules/cypress", "cypress/**/*.js"]
}
```

- 这里表示去/node_modules/cypress 文件夹下。
- cypress/\*\*\/\*.js 表示 cypress 文件夹下所有的.js 文件。

- 方式 3：cypress snippets 插件

# mocha 是测试库，chai 是断言库。
