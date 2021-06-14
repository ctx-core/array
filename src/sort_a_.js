import { maybe_sort, sort } from './sort';
import { maybe_slice, slice } from './slice';
/**
 * Sorts a copy of `a` by the `compare` function.
 */
export function sort_a_(a, compare) {
    return sort(slice(a, 0), compare);
}
export function maybe_sort_a_(maybe_a, compare) {
    return maybe_sort(maybe_slice(maybe_a, 0), compare);
}
export { sort_a_ as sort_a1_, sort_a_ as _sort_a1, sort_a_ as _a1__sort, maybe_sort_a_ as maybe_sort_a1_, maybe_sort_a_ as _maybe_sort_a1, };
//# sourceMappingURL=src/sort_a_.js.map