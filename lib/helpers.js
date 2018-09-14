/**
 * Small hellper class
 */

class Helpers {
  static parseJSONToObject(str){
    try {
      let obj = JSON.parse(str);
      return obj;
    } catch(err) {
      return {};
    }
  }
}

module.exports = Helpers;