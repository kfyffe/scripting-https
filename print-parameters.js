var https = require('https');


function getAndPrintHTML (options) {

  var buffData = '';


  https.get(options, function (response){

    response.setEncoding('utf8');

    response.on('data', function (data){
      buffData += data;
    });

    response.on('end', function(){
      console.log('Response stream complete.' + buffData);
    });
  })

}

//placed two options in parent object and then called which option when invoking function.
var requestOptions = {
  option1: {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  },
  option2: {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  }
};

getAndPrintHTML(requestOptions.option2);
