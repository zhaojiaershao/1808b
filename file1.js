let path = require('path')
let fs = require('fs')
let fsPromise= fs.promises;
let filename = path.join(__dirname,'good.json')
fsPromise.readFile(filename,'utf-8').then(data=>{
    console.log(data)
    //读出来的是个json 转成能操作的对象
    data = JSON.parse(data)
    data.push({
        id:2,
        name:'bosaho'
    })
    //写入数据的时候要把对象征程json
    fsPromise.writeFile(filename,JSON.stringify(data),'utf-8')
})

let filName=path.join(__dirname,'good.json');
fsPromise.readFile(filName,"utf-8").then(data=>{
    data=JSON.parse(data)
    console.log(data)
    for(var key in data){
       if(data[key].id==1){
           data[key].name="香蕉"
       }
    }
    fsPromise.writeFile(filName,JSON.stringify(data),"utf-8")
})