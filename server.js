const http = require('http');


http.createServer(function (req, res) {
    if(req.url === "/OK"){
      console.log("Inbound 'OK' request being processed");
      res.writeHead(200);
    } else if(req.url === "/Bad-Request"){
      console.log("Inbound 'Bad-Request' request being processed");
      res.writeHead(400);
    } else if(req.url === "/Created"){
      if(req.method === "POST") res.writeHead(201);
      else res.writeHead(405);
    } else if(req.url === "/Forbidden"){
      console.log("Inbound 'Forbidden' request being processed");
      res.writeHead(403);
    } else if(req.url === "/Found"){
      console.log("Inbound 'Found' request being processed");
      res.writeHead(302, { 'Location':'http://appacademy.io'});
    } else if(req.url === "/Gateway-Timeout"){
      console.log("Inbound 'Gateway-Timeout' request being processed");
      res.writeHead(504);
    } else if(req.url === "/Internal-Server-Error"){
      console.log("Inbound 'Internal-Server-Error' request being processed");
      res.writeHead(500);
    } else if(req.url === "/Moved-Permanently"){
      console.log("Inbound 'Moved-Permanently' request being processed");
      res.writeHead(301);
    } else if(req.url === "/Unauthorized"){
      console.log("Inbound 'Unauthorized' request being processed");
      res.writeHead(401);
    } else {
      console.log("Path Not Found");
      res.writeHead(404);
    }
    res.end();
}).listen(3000, function(){
    console.log('Starting server 3000...');
});


//200 is ok
//404 is not found
//400 bad request
//201 created
//403 forbidden
//302 found
//504 gateway timeout
//500 interal server error
//301 moved permanetely
//401 Unauthorized
