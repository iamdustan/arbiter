
# be the arbiter of your history
Arbiter is a super-lightweight enhancement library for your html5 apps.
This isn’t a catch-all-own-the-world solution like History.js by
balupton

## usage
To be used with ender and being dependent upon a dom utility, event,
and ajax libs, it’s as simple as calling the $.change function with the
path you’d like to load.

```
$('body').delegate('#slider a', 'click', function (e) {
  e.stop()
  $.change(this.href)
})
```
Currently only supports html get requests to your current origin with.

## todo

* Add callback methods (who doesn’t like custom animations on load?
* Clean up code
* Write tests
* Test browsers
* Eat a doughnut



