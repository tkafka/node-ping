#NODE-PING
a ping wrapper for nodejs

#LICENSE MIT

(C) Daniel Zelisko

http://github.com/danielzzz/node-ping

#DESCRIPTION

node-ping is a simple wrapper for the system ping utility

#INSTALLATION

npm install ping

#USAGE

##Promise wrapper

    var ping = require("../index");

    var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];

    hosts.forEach(function (host) {
        ping.promise.probe(host)
            .then(function (res) {
                console.log(res);
            });
    });

##Promise Wrapper with configable ping options

    //Only promise wrapper supports configable ping options
    hosts.forEach(function (host) {
        ping.promise.probe(host, {
            timeout: 10,
            extra: ["-i 2"]
        }).then(function (res) {
                console.log(res);
            });
    });

