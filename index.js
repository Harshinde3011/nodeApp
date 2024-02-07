const http = require("http")   // build in package
const fs = require("fs")


const server = new http.createServer((req, res)=>{           // create http server, and the arrow function will process the incoming reuests
//   res.end(req.headers);                                // info of client request
    
    const log = `${Date.now()}: ${req.url}: we recive request \n`;

    fs.appendFile("logs.txt", log, (err, result)=>{            // Async

        switch (req.url) {
            case "/":
            res.end("Home page");
                break;

            case "/about":
            res.end("I am Harsh");
                break;

            case "/contact":
            res.end("+917028121922");
                break;

            default:
            res.end("404 not found");
                break;
        }


    })
    
})    

// whenevr an incoming request come to the server it will run callbackFn in 
//"req argument" in that object is pass which contain all info about the request(client side) like IP, user, which request ....
// "res argument" will return response 

server.listen(8000, ()=>console.log("Server Started"))

// when u open browser and "localhost:8000" this "Hello from server", is displayed on browser
// when u request localhost:8000 "We recieve ur request" is displayed onres.endterminal.