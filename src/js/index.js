/**
 * The demo module
 * @module demo
 *
 */

/**
 * The actual class that starts the app
 * @class index
 * @static
 */

var index = {
  /**
   * init the app
   * @method init
   */
  init: function () {
    // **IMPORTANT**
    //
    // This is a very complicated method
    // it is actually loading one of the most complicated
    // implementations of the greeters ever done in javascript
    //
    var greeter = require( './greet' );
    greeter.greet('Brian and Aakash!!!');
  }
};


index.init();
