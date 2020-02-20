const fs = require("fs");
const process = require("child_process");
const Converter = require("api-spec-converter");

console.log('++++ Swagger Client Code Gen ++++')

console.log("Converting swagger file");

Converter.convert({
  from: "swagger_2",
  to: "openapi_3",
  source: "./Petstore-swagger.json"
}).then(function(converted) {
  const options = { syntax: "yaml", order: "openapi" };
  fs.writeFileSync("Petstore-converted.yaml", converted.stringify(options));
});

console.log("Generating client code");

process.exec(
  "npx openapi-generator generate -i Petstore-converted.yaml -g javascript -o api-services"
);

console.log('++++ Swagger Client Code Gen Complete ++++ \n')
