
# be the arbiter of your history
Arbiter is a super-lightweight enhancement library for your html5 apps.
This isn’t a catch-all-own-the-world solution like History.js by
balupton

## usage
To be used with ender and being dependent upon a dom utility, event,
and ajax libs, it’s as simple as calling the $.change function with the
path you’d like to load.

### Basic usage

```
$('body').delegate('#slider a', 'click', function (e) {
  e.stop()
  $.change(this.href)
})
```

### Set your own success callback and animation
```
$('body').delegate('#slider a', 'click', function (e) {
  e.stop()
  $.change(this.href, function (data) {
    // do cool animation stuff here
  })
})
```

### Set ajax method and type
```
$('body').delegate('#slider a', 'click', function (e) {
  e.stop()
  $.change(this.href, { method: 'POST', type: 'json', function (data) {
    // do yo’ thang with json
  })
})
```

## todo

* Test reverse callbacks (for history.back())
* Clean up code
* Write tests
* Test browsers
* Eat a doughnut



