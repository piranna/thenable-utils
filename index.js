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
