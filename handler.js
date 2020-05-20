function home(response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write("<H1>Welcome home</H1>");
    response.end();
    console.log("Executing home handler");
}

function review(response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write("<H1> Review app </H1>");
    response.end();
    console.log("Executing home review");
}

exports.home = home;
exports.review = review;