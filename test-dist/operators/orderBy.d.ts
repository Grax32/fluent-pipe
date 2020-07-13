declare type SortExpressionSingle<T> = (value: T) => string | number | boolean;
declare type SortExpression<T> = SortExpressionSingle<T> | SortExpressionSingle<T>[];
/**
 * @description Sort array by 1 or more expressions
 * @example orderBy(myArrayOfObjects, v => v.firstName)
 * @example orderBy(myArrayOfObjects, [v => v.lastName, v => v.firstName])
 */
export declare function orderBy<T>(value: T[], sortExpression: SortExpression<T>): T[];
export {};
//# sourceMappingURL=orderBy.d.ts.map