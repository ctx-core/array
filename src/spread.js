import { wrap_a_ } from '@ctx-core/function';
/**
 * Apply the spread operator on `a_unwrap` into `fn`; `fn(...a_unwrap)`
 */
export function spread(fn, a_unwrap) {
    const wrap_a = wrap_a_(a_unwrap);
    return fn(...wrap_a);
}
//# sourceMappingURL=src/spread.js.map