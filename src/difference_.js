import { _difference__set } from '@ctx-core/set';
import { wrap_a2_ } from '@ctx-core/function';
/**
 * Returns the _difference of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function difference_(a2_nowrap) {
    const a2 = wrap_a2_(a2_nowrap);
    return Array.from(_difference__set(a2));
}
export { difference_ as _difference, difference_ as _difference__a1, };
//# sourceMappingURL=src/difference_.js.map