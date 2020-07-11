"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FluentPipe = /** @class */ (function () {
    function FluentPipe(initialState, func) {
        this.result = func(initialState);
    }
    FluentPipe.prototype.pipe = function (func) {
        return new FluentPipe(this.result, func);
    };
    /** @deprecated Use from<T> */
    FluentPipe.for = function (initialState) {
        return new FluentPipe(initialState, function (v) { return v; });
    };
    FluentPipe.from = function (initialState) {
        return new FluentPipe(initialState, function (v) { return v; });
    };
    return FluentPipe;
}());
exports.FluentPipe = FluentPipe;
