(function (name, definition) {
  if (typeof module !== 'undefined') module.exports = definition()
  else if (typeof define === 'function' && define.amd) define(name, definition)
  else this[name] = definition()
}('arbiter', function () {
  if (!(!!(window.history && history.pushState))) return false
  var $ = window.ender
    , arbiter = {}
    , pageState = {}
    , merge = function (o, o2) {
        for (var k in o2) if (k.isOwnPropery(o2)) o[k] = o2[k]
        return o
      }
    , defaults = function (o, o2) {
        for (var k in o2) if (!o[k]) o[k] = o2[k]
        return o
      }
    , setPrevious = function(options) {
        // update previous transition to be next transition
        if (pageState.state) pageState.state.transition = options.type
        else {
          pageState = {
            state: { page: location.pathname, transition: undefined, reverse: undefined }
          , title: ''
          , url: location.pathname
          }
        }

        history.replaceState(pageState.state, pageState.title, pageState.url)
      }
    , setState = function(options) {
        // keep state details for next time
        pageState = {
          state: {
            page: options.page
          , transition: options.type
          , reverse: options.reverse
          }
        , title: ''
        , url: options.page
        }

        history.pushState(pageState.state, pageState.title, pageState.url)
      }
    , changePage = function (page, options) {
        // set callback function to getPage if none are built in
        var success;
        if (typeof options === 'function') success = options
        options = options || {}
        defaults(options, {
          type: null,
          reverse: null,
          page: page,
          success: success
        })

        setPrevious(options)
        setState(options)
        getPage(options)
      }
    , getPage = function (ajax) {
        ajax = defaults(ajax || {}, {
          url: pageState.url,
          type: 'html',
          method: 'get',
          success: function (data) {
            $('#slider').html($(data).find('#slider').html())
          }
        })
        $.ajax(ajax)
      }

  if ('addEventListener' in window) {
    window.addEventListener('popstate', function (e) {

      // ignore popstate thrown on page load
      if (!e.state) { return }

      //transition(e.state.page, e.state.transition, !e.state.reverse)
      pageState = {
        state: {
          page: e.state.page
        , transition: e.state.transition
        , reverse: e.state.reverse
        }
      , title: ''
      , url: e.state.page
      }
      getPage()

    }, false)
  }

  arbiter.change = changePage;
  return arbiter
}));

