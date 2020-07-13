/** Wrap func in promise */
function funcToPromise<X, Y>(func: (value: X) => Y): (value: X) => Promise<Y> {
  return (value: X) => Promise.resolve(func(value));
}

export class FluentPipeAsync<T, R> {
  public result: Promise<R>;

  constructor(initialState: Promise<T>, func: (value: T) => Promise<R>) {
    this.result = this.exec(initialState, func);
  }

  private async exec(valuePromise: Promise<T>, func: (value: T) => Promise<R>) {
    return func(await valuePromise);
  }

  public pipe<R2>(func: (value: R) => R2): FluentPipeAsync<R, R2> {
    return new FluentPipeAsync(this.result, funcToPromise(func));
  }

  public pipeAsync<R2>(
    func: (value: R) => Promise<R2>
  ): FluentPipeAsync<R, R2> {
    return new FluentPipeAsync(this.result, func);
  }

  public static from<T>(initialState: T): FluentPipeAsync<T, T> {
    return new FluentPipeAsync(Promise.resolve(initialState), (v) =>
      Promise.resolve(v)
    );
  }
}
