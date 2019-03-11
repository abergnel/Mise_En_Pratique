"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var body_parser = require('body-parser');
var cors = require('cors');
var path = require('path');
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
    }
    Server.prototype.start = function () {
        var app = express();
        app.use(body_parser.urlencoded({
            extended: true
        }));
        app.use(body_parser.json());
        app.use(express.static(path.join(__dirname, 'public'))); //pour le css
        // Add headers
        var corsOptions = {
            origin: '*',
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
        };
        app.use(cors(corsOptions));
        app.listen(this.port, function () {
            console.log('Serveur démarré (4000)');
        });
    };
    return Server;
}());
exports.default = Server;
