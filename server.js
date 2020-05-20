var http = require('http');
var url = require('url')

function startServer(route, handle){
    function onRequest(request,response){
        
        var pathName = url.parse(request.url).pathname;
        console.log("pathName: "+pathName);
        route(handle,pathName,response);
    }
    
    http.createServer(onRequest).listen(8888);
    
    console.log("server stated on local host on 8888")
}
exports.startServer = startServer;


