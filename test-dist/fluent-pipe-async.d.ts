export declare class FluentPipeAsync<T, R> {
    result: Promise<R>;
    constructor(initialState: Promise<T>, func: (value: T) => Promise<R>);
    private exec;
    pipe<R2>(func: (value: R) => R2): FluentPipeAsync<R, R2>;
    pipeAsync<R2>(func: (value: R) => Promise<R2>): FluentPipeAsync<R, R2>;
    static from<T>(initialState: T): FluentPipeAsync<T, T>;
}
//# sourceMappingURL=fluent-pipe-async.d.ts.map