import { maybe_slice, slice } from './slice';
/**
 * Returns a `slice` function with the given `...arg_a` that takes a Array `a` as it's argument.
 */
export function slice_(begin_idx, end_idx) {
    return a => slice(a, begin_idx, end_idx);
}
export function maybe_slice_(begin_idx, end_idx) {
    return (maybe_a) => maybe_slice(maybe_a, begin_idx, end_idx);
}
export { slice_ as _slice, slice_ as _fn__slice, maybe_slice_ as _maybe_slice, };
//# sourceMappingURL=src/slice_.js.map