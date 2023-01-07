//以下为nodejs代码  在控制台用node 文件名 进行执行
// 1.引入fs模块 folder system
const fs = require("fs");
// 2.调用方法读取文件
/* fs.readFile("../resource/study.md", (err, data) => {
  // 如果失败，则抛出错误
  if (err) throw err;
  // 如果没有出错，则输出内容
  console.log(data.toString());
}); */

// 3.使用promise封装
const p = new Promise(function (resolve, reject) {
  fs.readFile("../resource/study.md", (err, data) => {
    // 如果失败
    if (err) reject(err);
    // 如果成功
    resolve(data);
  });
});

p.then(
  function (val) {
    console.log(val.toString());
  },
  function (reason) {
    console.log(reason);
  }
);
