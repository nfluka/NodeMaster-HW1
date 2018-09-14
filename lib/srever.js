 const http = require('http');

 /**
  * Class for starting HTTP Server
  */
class HTTPServer {

  /**
   * This method will start HTTP server based on config object,
   * and takes handler for handeling requests and responce.
   * Reason this is static method is that we dont need create
   * instance of the class.
   * 
   */
  static init(config, handler){
    
    // ES6 destructuring
    const { httpPort, envName } = config;
    
    this.httpSrever = http.createServer((request, responce) => {
      handler(request, responce);
    });

    this.httpSrever.listen(httpPort, () => {
      console.log(`Server started and listening on port ${httpPort} in ${envName} enviroment.`);
    });
  }

 }


 module.exports = HTTPServer;