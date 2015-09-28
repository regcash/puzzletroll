var handler = require('./handler');

module.exports = function (req, res, next){
	// res.set(defaultCorsHeaders);
	var route = req.url.substring(1);

	//if not valid, send back redirect
	// if(!isValidRoute(route)){
	// 	res.redirect('/');
	// }
	switch(req.method){
		case 'GET':
			handler[route].get(req, res, next);
			break;
		case 'POST':
			handler[route].post(req, res, next);
			break;
		//USE POST METHOD FOR PUT?
		case 'PUT':
			handler[route].post(req, res, next);
			break;
		case 'OPTIONS':
			res.send('okay to continue!');
			break;
		//if anything else, redirect to 
		// default:
		// 	res.redirect('/');
	}
};

//not sure if we need all these cors headings
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
};

//check to see if api/____ is valid route
var routes = ['challenges, users', 'google'];

var isValidRoute = function (route) {
	var found = false;
	for(var i = 0; i < routes.length; i++){
		if(routes[i]===route){
			found = true;
		}
	}
	return found;
};
