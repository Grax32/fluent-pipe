export declare class FluentPipe<T, R> {
    result: R;
    constructor(initialState: T, func: (value: T) => R);
    pipe<R2>(func: (value: R) => R2): FluentPipe<R, R2>;
    static from<T>(initialState: T): FluentPipe<T, T>;
}
//# sourceMappingURL=fluent-pipe.d.ts.map