import { maybe_sort, sort } from './sort';
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export function sort_(compare) {
    return a => sort(a, compare);
}
export function maybe_sort_(compare) {
    return (maybe_a) => maybe_sort(maybe_a, compare);
}
export { sort_ as _sort, sort_ as _fn__sort, maybe_sort_ as _maybe_sort, };
//# sourceMappingURL=src/sort_.js.map