export class fluentPipe<T, R> {
  public result: R;

  constructor(initialState: T, func: (value: T) => R) {
    this.result = func(initialState);
  }

  public pipe<R2>(func: (value: R) => R2) {
    return new fluentPipe(this.result, func);
  }

  public static for<T>(initialState: T) {
    return new fluentPipe(initialState, (v) => v);
  }
}
