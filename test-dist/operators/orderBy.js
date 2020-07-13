"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderBy = void 0;
/**
 * @description Sort array by 1 or more expressions
 * @example orderBy(myArrayOfObjects, v => v.firstName)
 * @example orderBy(myArrayOfObjects, [v => v.lastName, v => v.firstName])
 */
function orderBy(value, sortExpression) {
    const newValue = [...value];
    if (!Array.isArray(sortExpression)) {
        sortExpression = [sortExpression];
    }
    const sorters = sortExpression;
    newValue.sort((a, b) => sort(a, b, sorters));
    return newValue;
}
exports.orderBy = orderBy;
function sort(a, b, sorters) {
    const sortExpression = sorters[0];
    if (!sortExpression) {
        return 0;
    }
    const left = sortExpression(a);
    const right = sortExpression(b);
    if (left < right) {
        return -1;
    }
    else if (right > left) {
        return 1;
    }
    return sort(a, b, sorters.slice(1));
}
//# sourceMappingURL=orderBy.js.map