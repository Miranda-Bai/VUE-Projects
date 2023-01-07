//以下为nodejs代码  在控制台用node 文件名 进行执行
// 1.引入fs模块 folder system
const fs = require("fs");

function readFile1() {
  return new Promise(function (resolve, reject) {
    fs.readFile("../resource/study.md", (err, data) => {
      // 如果失败
      if (err) reject(err);
      // 如果成功
      resolve(data);
    });
  });
}

function readFile2() {
  return new Promise(function (resolve, reject) {
    fs.readFile("../resource/study2.md", (err, data) => {
      // 如果失败
      if (err) reject(err);
      // 如果成功
      resolve(data);
    });
  });
}

function readFile3() {
  return new Promise(function (resolve, reject) {
    fs.readFile("../resource/study3.md", (err, data) => {
      // 如果失败
      if (err) reject(err);
      // 如果成功
      resolve(data);
    });
  });
}

async function main() {
  let temp1 = await readFile1();
  let temp2 = await readFile2();
  let temp3 = await readFile3();

  console.log(temp1.toString());
  console.log(temp2.toString());
  console.log(temp3.toString());
}

main();
