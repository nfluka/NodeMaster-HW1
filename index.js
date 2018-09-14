/**
 * Man app file
 * 
 */

 const HTTPServer = require('./lib/srever.js');
 const router = require('./lib/router.js');
 const helpers = require('./lib/helpers.js');
 const url = require('url');
 const stringDecoder = require('string_decoder').StringDecoder;
 const config = require('./config');

 // Starts HTTP server based on config
 HTTPServer.init(config, serverHandler);

function serverHandler(request, responce)  {
  
  // Get URL and parse it
  const parsedURL = url.parse(request.url, true);

  // Get path from URL
  const path = parsedURL.pathname.replace(/^\/+|\/+$/g, '');

  // Get query string as object
  const queryString = parsedURL.query;

  // Request method
  const method = request.method;

  // Headers
  const headers = request.headers;

  // Get paylod if any was sent in request
  const decoder = new stringDecoder('utf-8');
  let buffer = '';

  request.on('data', data => buffer += decoder.write(data));

  request.on('end', () => {
    buffer += decoder.end();

    // Get route handler
    const handler = typeof router[path] === 'undefined' ? router.notFound : router[path];

    // Data that will be sent to route handler
    const data = {
      'path' : path,
      'queryString' : queryString,
      'headers': headers,
      'method': method,
      'payload': helpers.parseJSONToObject(buffer)
    };

    // Route request to right handler
    handler(data, (statusCode, payload) => {

      statusCode = typeof statusCode === 'number' ? statusCode : 200;
      payload = typeof payload === 'object' ? payload : {};

      const playloadString = JSON.stringify(payload);

      responce.setHeader('Content-Type', 'application/json');
      responce.writeHead(statusCode);
      responce.end(playloadString);
      console.log(`Returning status ${statusCode} with ${playloadString} responce`);
    });

  });
 }