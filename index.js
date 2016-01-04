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


exports.success = success
exports.failure = failure
