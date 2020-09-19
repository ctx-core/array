import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns true if every `predicate(value)` is truthy
 */
export declare function every<I>(a1: I[], predicate: (item: I, number: any, a1: I[]) => boolean): boolean;
export declare const every_a1: typeof every;
export declare const every__a1: typeof every;
export declare function maybe_every<I>(maybe_a1: maybe<I[]>, predicate: (item: I, number: any, a1: I[]) => boolean): maybe_undefined<boolean>;
