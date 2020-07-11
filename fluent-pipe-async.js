"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FluentPipeAsync = /** @class */ (function () {
    function FluentPipeAsync(initialState, func) {
        this.result = func(initialState);
    }
    FluentPipeAsync.prototype.pipe = function (func) {
        return new FluentPipeAsync(this.result, func);
    };
    FluentPipeAsync.from = function (initialState) {
        return new FluentPipeAsync(initialState, function (v) { return v; });
    };
    return FluentPipeAsync;
}());
exports.FluentPipeAsync = FluentPipeAsync;
