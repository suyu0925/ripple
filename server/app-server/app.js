var http = require('http');
var url = require('url');
var port = 2345;

function onRequest(req, res) {
	var pathname = url.parse(req.url, true).pathname;
	var arg = url.parse(req.url, true).query;

	console.log('pathname: ' + pathname);
	console.log('arg: ' + JSON.stringify(arg));

	if (pathname == '/login') {
		if (arg.device_id) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('device_id = ' + arg.device_id + '\n');			
		} else {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Login: no device_id\n');
		}
	} else {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World\n');
	}
}

http.createServer(onRequest).listen(port);

console.log('app server is running on port: ' + port);