const fs = require('fs');
const process = require('child_process')
const Converter = require('api-spec-converter');

Converter.convert({
  from: 'swagger_2',
  to: 'openapi_3',
  source: './Petstore-swagger.json'
}).then(function(converted) {
  const options = { syntax: 'yaml', order: 'openapi' };
  fs.writeFileSync('Petstore-converted.yaml', converted.stringify(options));
});

process.exec('npx openapi-generator generate -i Petstore-converted.yaml -g javascript -o api-services')


