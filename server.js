module.exports = function (app) {
    app.listen('3000', function(err) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.info('App kører på 3000');
    });
}