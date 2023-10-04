const gigController = require("../controllers/gigController");

module.exports = function(app) {

	app.route("/api/all/")
		.get(gigController.get);
	app.route("/api/scrape/")
		.get(gigController.create);
}