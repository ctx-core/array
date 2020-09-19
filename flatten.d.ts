import { maybe_undefined } from '@ctx-core/function';
/**
 * Flattens the a1 & it's children into an a1 without chunks
 */
export declare function flatten<I>(a1: I[]): I[];
export declare const flatten__a1: typeof flatten;
export declare function maybe_flatten<I>(in_a1: I[]): maybe_undefined<I[]>;
