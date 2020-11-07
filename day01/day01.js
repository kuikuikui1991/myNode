var name = "chengkuikui"
console.log(name)
// 读取文件开始
const fs = require('fs')
// 两个参数，data其实是一个十六进制数据，使用toString方法可以得到我们能看到的内容
fs.readFile('./day01.md',(error, data) => {
    console.log(error, data.toString())
})
// console.log(fs)
// 读取文件结束
// 写入文件开始
fs.writeFile('./你好', "你好，我正在写入文件", (err) => {
    console.log(err);
})
// 写入文件结束
// 创建服务器开始
const http = require('http')
console.log("创建了http",http)
const server = http.createServer()
// 对request进行监听(使用箭头函数还不行。。。)
server.on('request', function(){console.log('收到请求了')}
)
    
// 监听端口号，服务器启动
server.listen(3000, () =>{
    console.log('服务器启动成功了：')
})
// 创建服务器结束