var queryString= require('querystring')

function home(response){
    var htmlFile = '<html>'+
                        '<head>'+
                            '<meta http-equiv="Content-Type" content="text/html"; charset="UTF-8">'+
                        '</head>'+
                        '<body>'+
                            '<form action="/review" method="post">'+
                                '<textarea name="review" rows="5" cols="20"></textarea>'+
                                '<input type="submit" value="Submit Review">'+
                            '</form>'+
                        '</body>'+
                    '</html>';

    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(htmlFile);
    response.end();
    console.log("Executing home handler");
}

function review(response, reviewData){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write("<H1> Your review is: "+ queryString.parse(reviewData).review + "</H1>");
    response.end();
    console.log("Executing home review");
}

exports.home = home;
exports.review = review;