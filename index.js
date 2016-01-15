/**
 * Utilities to help the creation of thenable objects
 */

/**
 * Factory fur `success` functions
 *
 * Create a `success` function inside your {Promise} resolver and later call it
 * when it resolve successfully.
 *
 * @param {Function} resolve
 * @param {Function} reject
 * @param {Function} [onFulfilled]
 * @param {*} [thisArg]
 *
 * @return {Function}
 */
function success(resolve, reject, onFulfilled, thisArg)
{
  return function(result)
  {
    if(onFulfilled)
      try
      {
        result = onFulfilled.call(thisArg, result)
      }
      catch(exception)
      {
        return reject(exception)
      }

    resolve(result)
  }
}

/**
* Factory fur `failure` functions
*
* Create a `failure` function inside your {Promise} resolver and later call it
* when it resolve with a failure.
*
* @param {Function} reject
* @param {Function} [onRejected]
* @param {*} [thisArg]
*
* @return {Function}
 */
function failure(reject, onRejected, thisArg)
{
  return function(result)
  {
    if(onRejected)
      try
      {
        result = onRejected.call(thisArg, result)
      }
      catch(exception)
      {
        return reject(exception)
      }

    reject(result)
  }
}


/**
 * Generic `Promise.catch()` method
 *
 * It delegate its functionality on the `then()` of the object where it's
 * applied, both directly or on its class definition prototype
 *
 * @param {Function} [onRejected]
 *
 * @return {Promise}
 */
function catch(onRejected)
{
  return this.then(null, onRejected)
}


exports.success = success
exports.failure = failure
exports.catch   = catch
