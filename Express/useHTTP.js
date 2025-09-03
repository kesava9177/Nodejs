const http=require('http');
const {readFileSync}=require('fs');
const homePage=readFileSync('./navbar-app/index.html');
const homeStyles=readFileSync('./navbar-app/styles.css');
const homeImage=readFileSync('./navbar-app/logo.svg');
const homeLogic=readFileSync('./navbar-app/browser-app.js');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end(homePage);
    }
    else if(req.url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.end(homeStyles);
    }
    else if(req.url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.end(homeImage);
    }
    else if(req.url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'});
        res.end(homeLogic);
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end('<h1>About Page</h1>');
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(5000);