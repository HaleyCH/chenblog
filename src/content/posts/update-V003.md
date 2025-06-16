---
title: "V0.0.3 主题更新 密码：test"
description: "Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro."
date: "June 16 2025"
pinned: true
password: "test"
---

新增：

- [expressive-code](https://expressive-code.com/)代码框支持
- 文章加密功能支持
- 主题修改

`EC代码框`参考：

```markdown
title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
console.log('this line is marked as deleted')
// This line and the next one are marked as inserted
console.log('this is the second inserted line')

return 'this line uses the neutral default marker type'
}
```

效果：

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log("this line is marked as deleted");
  // This line and the next one are marked as inserted
  console.log("this is the second inserted line");

  return "this line uses the neutral default marker type";
}
```
