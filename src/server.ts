let express = require('express');
let body_parser = require('body-parser');
let cors = require('cors');
let path = require('path');

export default class Server {

    readonly port : number;

    constructor(port : number){
        this.port = port;
    }

    start() {

        const app = express();

        app.use(body_parser.urlencoded({    //pour le parsing
            extended : true
        }));
        app.use(body_parser.json());
        
        app.use(express.static(path.join(__dirname, 'public'))); //pour le css

        var corsOptions = {
            origin: '*',
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
        }
        app.use(cors(corsOptions));

        app.listen(this.port, function(this : any) {
            console.log('Serveur démarré (4000)');
        })

    }

}