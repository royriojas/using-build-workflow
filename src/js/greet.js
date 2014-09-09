/**
 * The demo module
 * @module demo
 *
*/


/**
 * a simple demo class to say hello
 *
 * @class greeter
 * @static
 * @exampleurl http://jsbin.com/siquke/1/edit?js,console 100% 600
 */

module.exports = {
  /**
   * Says hi to the world and to the given name
   *
   * @method greet
   * @param [name] {String} the name to say hi or `unknown` if none provided
   */
  greet: function (name) {
    console.log( 'hello world!, hello: ', name || 'unknown' );
  }
};
