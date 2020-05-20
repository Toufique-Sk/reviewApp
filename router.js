function route(handle, pathName,response){
    console.log("Routing request for "+pathName);
    if(typeof handle[pathName] === 'function'){
        handle[pathName](response);
    } else {
        console.log("No such Handler " +pathName);
        response.writeHead(404, {'Content-Type':'text/html'});
        response.write("<H1> Page not found </H1>");
        response.end();
    }
}

exports.route = route;