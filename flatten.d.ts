import { maybe_undefined, wrap_a_type } from '@ctx-core/function';
/**
 * Flattens the a1 & it's children into an a1 without chunks
 */
export declare function flatten<I extends unknown>(a1: wrap_a_type<I>): I[];
export declare const flatten__a1: typeof flatten;
export declare function maybe_flatten<I extends unknown>(in_a1: wrap_a_type<I>): maybe_undefined<I[]>;
