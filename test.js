var assert = require('assert')

var thenableUtils = require('./index')


function noop(){}


describe('success', function()
{
  it('plain resolve', function(done)
  {
    var success = thenableUtils.success(done)

    success()
  })

  it('onFulfilled', function(done)
  {
    var success = thenableUtils.success(done, null, noop)

    success()
  })

  it('onFulfilled failed', function(done)
  {
    var expected = 'asdf'

    var success = thenableUtils.success(null, function(e)
    {
      assert.deepStrictEqual(e, expected)

      done()
    },
    function()
    {
      throw expected
    })

    success()
  })
})

describe('failure', function()
{
  it('plain reject', function(done)
  {
    var failure = thenableUtils.failure(null, done)

    failure()
  })

  it('onRejected', function(done)
  {
    var failure = thenableUtils.failure(done, null, noop)

    failure()
  })

  it('onRejected failed', function(done)
  {
    var expected = 'asdf'

    var failure = thenableUtils.failure(null, function(e)
    {
      assert.deepStrictEqual(e, expected)

      done()
    },
    function()
    {
      throw expected
    })

    failure()
  })
})

describe('catch', function()
{
  it('will call `then()`', function(done)
  {
    var promise = Promise.reject()

    promise.catch = thenableUtils.catch

    promise.catch(done)
  })
})
