import { a_nowrap_type, wrap_a2_type } from '@ctx-core/function';
/**
 * Returns the _intersection of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export declare function _intersection<I extends unknown = unknown>(a2_nowrap: a_nowrap_type<I>): wrap_a2_type<I> extends (infer O)[][] ? O : never;
export { _intersection as _intersection__a1, };
