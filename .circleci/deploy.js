var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
    username: process.env.FTPUSERNAME,
    password: process.env.FTPPASS,
    host: process.env.FTPHOST,
    port: 21,
    localRoot: __dirname + "/fyp/2018/fyp18005/",
    remoteRoot: "/",
    include: ['*']
}

ftpDeploy.deploy(config, function(err) {
    if (err) console.log('deploy.js > ' + err);
    else console.log('deploy.js > finished');
});
