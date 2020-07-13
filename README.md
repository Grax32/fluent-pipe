# fluent-pipe
Execute fluent-style code without modifying prototype

```javascript
const fp = require("fluentpipe")
const { FluentPipe, FluentPipeAsync, orderBy } = fp;

  // define a sample array and a transform function
  const ra = [1, 2, 5, 4, 3];
  function transform(values, multiplier) {
   return values.map(value => value * multiplier);   
   }

  // starting with ra, transform several times and then return the result
  const z = FluentPipe
    .from(ra)
    .pipe(v => ({ name: 'user' + v, value: transform(v, 45)}))
    .pipe(x => x.map(item => item.toString()))
    .pipe(t => t + ' Total')
    .result;
```
