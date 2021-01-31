import { maybe_undefined, wrap_a_type } from '@ctx-core/function';
/**
 * Flattens the a1 & it's children into an a1 without chunks
 */
export declare function flatten<I extends unknown = unknown>(a1: wrap_a_type<I>): I[];
export declare function maybe_flatten<I extends unknown = unknown>(in_a1: wrap_a_type<I>): maybe_undefined<I[]>;
export { flatten as flatten__a1, };
