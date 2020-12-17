import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns true if every `predicate(value)` is truthy
 */
export declare function every<I extends unknown = unknown>(a1: I[], predicate: (item: I, number: any, a1: I[]) => boolean): boolean;
export declare function maybe_every<I extends unknown = unknown>(maybe_a1: maybe<I[]>, predicate: (item: I, number: any, a1: I[]) => boolean): maybe_undefined<boolean>;
export { every as every_a1, every as every__a1, };
