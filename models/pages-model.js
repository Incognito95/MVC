const db = require('../config/mysql')(); // connecting to database

exports.getPage = function () {
    db.query(`SELECT * FROM pages WHERE title = 'front page'`,
        function (err, result) {
            if (err) return err;
            return result[0];
        });
};