declare module "fluent-pipe-async" {
    export class FluentPipeAsync<T, R> {
        result: Promise<R>;
        constructor(initialState: Promise<T>, func: (value: T) => Promise<R>);
        private exec;
        pipe<R2>(func: (value: R) => R2): FluentPipeAsync<R, R2>;
        pipeAsync<R2>(func: (value: R) => Promise<R2>): FluentPipeAsync<R, R2>;
        static from<T>(initialState: T): FluentPipeAsync<T, T>;
    }
}
declare module "fluent-pipe" {
    export class FluentPipe<T, R> {
        result: R;
        constructor(initialState: T, func: (value: T) => R);
        pipe<R2>(func: (value: R) => R2): FluentPipe<R, R2>;
        static from<T>(initialState: T): FluentPipe<T, T>;
    }
}
declare module "operators/orderBy" {
    type SortExpressionSingle<T> = (value: T) => string | number | boolean;
    type SortExpression<T> = SortExpressionSingle<T> | SortExpressionSingle<T>[];
    /**
     * @description Sort array by 1 or more expressions
     * @example orderBy(myArrayOfObjects, v => v.firstName)
     * @example orderBy(myArrayOfObjects, [v => v.lastName, v => v.firstName])
     */
    export function orderBy<T>(value: T[], sortExpression: SortExpression<T>): T[];
}
declare module "index" {
    export * from "fluent-pipe";
    export * from "fluent-pipe-async";
    export * from "operators/orderBy";
}
declare module "operators/index" {
    export * from "operators/orderBy";
}
//# sourceMappingURL=fluentpipe.d.ts.map