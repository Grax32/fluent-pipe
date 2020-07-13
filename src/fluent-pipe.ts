export class FluentPipe<T, R> {
  public result: R;

  constructor(initialState: T, func: (value: T) => R) {
    this.result = func(initialState);
  }

  public pipe<R2>(func: (value: R) => R2): FluentPipe<R, R2> {
    return new FluentPipe(this.result, func);
  }

  public static from<T>(initialState: T): FluentPipe<T, T> {
    return new FluentPipe(initialState, (v) => v);
  }
}
