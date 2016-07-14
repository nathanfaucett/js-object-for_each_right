var keys = require("@nathanfaucett/keys");


module.exports = objectForEachRight;


function objectForEachRight(object, callback) {
    var objectKeys = keys(object),
        i = objectKeys.length,
        key;

    while (i--) {
        key = objectKeys[i];

        if (callback(object[key], key, object) === false) {
            break;
        }
    }

    return object;
}
