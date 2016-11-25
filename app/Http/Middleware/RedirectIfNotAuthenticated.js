'use strict'

class RedirectIfNotAuthenticated {

  * handle (request, response, next) {
    // here goes your middleware logic
    // yield next to pass the request to next middleware or controller
    const isLoggedIn = yield request.auth.check()
    if (!isLoggedIn) {
    	response.redirect('/login')
    }
    yield next
  }

}

module.exports = RedirectIfNotAuthenticated
