import type { falsy } from '@ctx-core/function';
/**
 * Returns true if every `predicate(value)` is truthy
 */
export declare function every<I extends unknown = unknown>(a1: I[], predicate: (item: I, idx: number, a1: I[]) => boolean): boolean;
export declare function maybe_every<I extends unknown = unknown>(maybe_a1: I[] | falsy, predicate: (item: I, idx: number, a1: I[]) => boolean): boolean | undefined;
export { every as every_a1, every as every__a1, };
