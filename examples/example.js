//-------- example -----------------------

var ping = require('../index');

var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
hosts.forEach(function(host){
    ping.promise.probe(host)
    	.then(function(res) {
    		console.log(host, res.alive, res.ms + ' ms');
    	})
});

