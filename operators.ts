type SortExpressionSingle<T> = (value: T) => string | number | boolean ;
type SortExpression<T> = SortExpressionSingle<T> | SortExpressionSingle<T>[];

export function orderBy<T>(value: T[], sortExpression: SortExpression<T>): T[] {
  const newValue = [...value];

  if (!Array.isArray(sortExpression)) {
    sortExpression = [sortExpression];
  }

  const sorters: SortExpressionSingle<T>[] = sortExpression;

  newValue.sort((a, b) => sort(a, b, sorters));
  return newValue;
}

function sort<T>(a: T, b: T, sorters: SortExpressionSingle<T>[]): number {
  const sortExpression = sorters[0];
  if (!sortExpression) {
    return 0;
  }

  const left = sortExpression(a);
  const right = sortExpression(b);

  if (left < right) {
    return -1;
  } else if (right > left) {
    return 1;
  }

  return sort<T>(a, b, sorters.slice(1));
}
