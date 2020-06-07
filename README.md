# fluent-pipe
Execute fluent-style code without modifying prototype

```javascript
  import { fluentPipe } from 'fluentpipe';

  // define a sample array and a transform function
  const ra = [1, 2, 3, 4, 5];
  const transform = (values: number[], multiplier: number) =>
   values.map(value => value * multiplier);

  // starting with ra, transform several times and then return the result
  const z = fluentPipe
    .for(ra)
    .pipe(v => transform(v, 45))
    .pipe(x => x.map(item => item.toString()))
    .pipe(t => t + 'Total')
    .result;

```
