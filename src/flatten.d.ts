import { wrap_a_T2 } from '@ctx-core/function'
/**
 * Flattens the a & it's children into an a without chunks
 */
export declare function flatten<I extends unknown = unknown>(a:wrap_a_T2<I>):I[];
export declare function maybe_flatten<I extends unknown = unknown>(in_a:wrap_a_T2<I>):I[]|undefined;
export { flatten as flatten__a1, }
