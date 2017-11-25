var http=require("http");

http.createServer(function (request,response){

	response.writeHead(200,{'Content-type':'text-plain'});
	response.write('Dog is running');
	setTimeout(function(){
	response.write('Dog is done');
	response.end();
	},5000);


}).listen(9999);
