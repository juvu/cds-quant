/**
 * Created by Z on 2016-12-14.
 */
var OPEN = function () {
    var key = getKey('open');
    var self = this;
    return function (index) {
        if ("@@key" == index) {
            return key;
        }
        var cb,
            value = 0;
        if (index < 0) {
            return value;
        }
        var current = self.kline[index] || self.current;
        value = current.open;
        return value;
    }
}

module.exports = OPEN;