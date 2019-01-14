module.exports = function getHTML (options, callback) {
  var https = require('https');
  var buffData = '';

  https.get(options, function (response){

    response.setEncoding('utf8');

    response.on('data', function (data){
      buffData += data;
    });

    response.on('end', function(){
       callback(buffData);
    });
  })
};