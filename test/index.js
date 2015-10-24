var tape = require("tape"),
    objectForEachRight = require("..");


tape("objectForEachRight(object, callback) executes a provided function once per object element, starting from the right", function(assert) {
    var count = 0;

    objectForEachRight([0, 1, 2, 3, 4], function() {
        count += 1;
    });

    assert.equals(count, 5);
    assert.end();
});
