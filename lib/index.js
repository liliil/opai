"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventDispatcher = function EventDispatcher(owner) {
    _classCallCheck(this, EventDispatcher);

    owner.E = new Proxy(this, ProxyHandle);
};

exports.default = EventDispatcher;


var ProxyHandle = {
    get: function get(target, key) {
        if (key in target) {
            return target[key];
        } else {
            target[key] = [];
            return [];
        }
    },
    set: function set(target, key, val) {
        if (Array.isArray(target[key])) {
            target[key].forEach(function (callback) {
                return callback(val);
            });
        } else {
            target[key] = [];
        }
        return true;
    }
};