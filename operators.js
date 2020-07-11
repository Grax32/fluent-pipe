"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function orderBy(value, sortExpression) {
    var newValue = __spreadArrays(value);
    if (!Array.isArray(sortExpression)) {
        sortExpression = [sortExpression];
    }
    var sorters = sortExpression;
    newValue.sort(function (a, b) { return sort(a, b, sorters); });
    return newValue;
}
exports.orderBy = orderBy;
function sort(a, b, sorters) {
    var sortExpression = sorters[0];
    if (!sortExpression) {
        return 0;
    }
    var left = sortExpression(a);
    var right = sortExpression(b);
    if (left < right) {
        return -1;
    }
    else if (right > left) {
        return 1;
    }
    return sort(a, b, sorters.slice(1));
}
