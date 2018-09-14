/**
 * Class to hold our routes
 */

class Router {
  
  /**
   * Returns payload with default name for greeting
   * or with name send in playload.
   */
  static hello(data, callback){
    const name = typeof data.payload.name === 'string' && data.payload.name.length > 0 ? data.payload.name : 'John Doe';
    console.log(data);
    if(name && data.method === 'POST') {
      callback(200, {'greeting' : `Hello, ${name}.`});
    } else {
      callback(404, {'Error' : 'This route only accepts POST method'});
    }
  }
 
  static notFound(data, callback) {
    console.log(data);
    callback(404);
  }

}


module.exports = Router;