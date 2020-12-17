import type { maybe_undefined } from '@ctx-core/function';
import { zipWidth_fn_type } from './zipWith';
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 */
export declare function _zipWith<I extends unknown = unknown>(fn: zipWidth_fn_type<I>): (...a2: I[][]) => maybe_undefined<I[][]>;
export { _zipWith as _fn__zipWith, };
