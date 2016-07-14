object-for_each_right
=======

executes a provided function once per object element.


```javascript
var objectForEachRight = require("@nathanfaucett/object-for_each_right");


objectForEachRight({
        a: "a",
        b: "b",
        c: "c"
    },
    function(value, key, object) {
        console.log(value, key, object);
    }
);
```
