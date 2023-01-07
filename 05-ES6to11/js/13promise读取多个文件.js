//以下为nodejs代码  在控制台用node 文件名 进行执行
// 1.引入fs模块 folder system
const fs = require("fs");

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
    
    return new Promise(function(resolve, reject){
        fs.readFile("../resource/study2.md", (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve([val, data]);
          });
    })
  },
  function (reason) {
    console.log(reason);
  }
).then(
    value=>{
        // 此时value是[val, data]数组
        return new Promise(function(resolve, reject){
            fs.readFile("../resource/study3.md", (err, data) => {
                // 压入第三次读取的内容
                value.push(data)
                // 如果成功
                resolve(value);
              });
        }) 
    }
).then(
    value=>{
        // // 此时value是三次读取内容的数组
        // join数组拼接函数
        console.log(value.join('\r\n'))
    }
);

