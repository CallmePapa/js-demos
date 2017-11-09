/**
 * Created by weiqiujuan on 17-9-25.
 */
let fs=require('fs'),
    url=require('url'),
    path=require('path'),
    http=require('http');
//从命令行获取root目录，默认当前目录
let root=path.resolve(process.argv[2]||'.');
console.log('static root dir:'+root);
//创建服务器
let server=http.createServer(function (request,response) {
    "use strict";
    let pathname=url.parse(request.url).pathname;
    let filepath=path.join(root,pathname);
    fs.stat(filepath,function (err,stats) {
        if(!err&&stats.isFile()){
            console.log('200'+url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log('404'+request.url);
            response.writeHead(404);
            response.end('404 not found');
        }
    });
});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');