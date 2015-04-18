var config = require(__dirname + '/../config/config'),
    util = require(__dirname + '/../helpers/util'),
    mysql = require(__dirname + '/../lib/mysql');
module.exports = function(app) {
    var jsonfileservice = require('./utils/jsonfileservice')();

    app.get('/api/maa', getMaa);

    function getMaa(req, res, next) {
        console.log('config', config);
        console.log(mysql);
        console.log(util);
        // var json = jsonfileservice.getJsonFromFile('/../../data/maa.json');
        // json[0].data.results.forEach(function(character) {
        //     var pos = character.name.indexOf('(MAA)');
        //     character.name = character.name.substr(0, pos - 1);
        // });
        // res.send(json);
    }
};