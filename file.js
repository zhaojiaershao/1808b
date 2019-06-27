let fs = require("fs");
let path = require("path")
let fsPromise = fs.promises ; //node 10版本以上

//读取文件 readFile  参数 文件路径 读取格式

fsPromise.readFile(path.join(__dirname,'./app.js'),"utf-8").then(data=>{
    console.log(data)
});
//写入文件 weiteFile  参数  1 要写入的文件路径  2. 要写入的数据 3. 写入的数据格式
//写入的数据会把文件以前的数据覆盖
fsPromise.writeFile("./a.txt","你好，我是你大爷","utf-8").then(data=>{
    console.log("写入成功")
})