
module.exports = {
//handle users requests
	users : {
		get : function (req, res, next) {
			console.log('user get');
			res.status(200).send();
		},
		post : function (req, res, next)	{
			console.log('user post');
			res.send();
		}
	},
//handle challenges requests
	challenges : {
		get : function (req, res, next) {
			console.log('challenges get');
			res.send();
		},
		post : function (req, res, next) {
			console.log('challenges post');
			res.send();
		}
	},
	//handle google authentication requests
	google : {
		get : function(req, res, next) {

		},
		post : function(req, res, next) {

		}
	}

};