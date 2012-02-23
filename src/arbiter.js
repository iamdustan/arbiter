
$.ajax.compat && $.ender({ ajax: $.ajax.compat });

!function(name, definition) {
  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(name, definition)
  else this[name] = definition()
}('arbiter', function () {
  if (!(!!(window.history && history.pushState))) return false
  var arbiter = {}
    , pageState = {}
    , merge = function(o, o2) {
        for (var k in o2) o[k] = o2[k]
        return o
      }
    , changePage = function(page, type, reverse) {
        // update previous transition to be next transition
        if (pageState.state) { pageState.state.transition = type }
        else {
          pageState = {
            state: { page: location.pathname, transition: undefined, reverse: undefined }
          , title: '', url: location.pathname
          }
        }
        history.replaceState(pageState.state, pageState.title, pageState.url)

        // keep state details for next time
        pageState = {
          state: {
            page: page
          , transition: type
          , reverse: reverse
          }
        , title: ''
        , url: page
        }

        history.pushState(pageState.state, pageState.title, pageState.url)
        getPage()
      }
    , getPage = function(ajax) {
        ajax = merge({
          url: pageState.url,
          dataType: 'html',
          type: 'get',
          success: function (html) {
            $('#slider').html($(html).find('#slider').html())
          }
        }, ajax)
        $.ajax(ajax)
      }

  if ('addEventListener' in window) {
    window.addEventListener('popstate', function(e) {

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
      ,  url: e.state.page
      }
      getPage()
    }, false)
  }

  arbiter.change = changePage;
  return arbiter
});




