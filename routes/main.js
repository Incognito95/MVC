const controllers = require('../controllers/pages-controllers');

module.exports = function (app) {
    app.get('/', controllers.mainPage);
    app.get('/sub', controllers.mainPage);
};