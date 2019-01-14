//requiring https outside of the function
var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response){

    response.setEncoding('utf8');

    response.on('data', function (data){
      console.log('Chunk Received.' + '\n');
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  })
}

//getAndPrintHTMLChunks();


function getAndPrintHTML () {
  var buffData = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


  https.get(requestOptions, function (response){

    response.setEncoding('utf8');

    response.on('data', function (data){
      buffData += data;
    });

    response.on('end', function(){
      console.log('Response stream complete.' + buffData);
    });
  })

}
getAndPrintHTML();