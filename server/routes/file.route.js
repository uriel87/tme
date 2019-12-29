var fileController = require('../controllers/file.controller');


// products routes
module.exports = function(app) {

	app.post('/uploadFile/', fileController.uploadFile);

};