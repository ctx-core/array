import { wrap_a1_type } from '@ctx-core/function';
/**
 * Apply the spread operator on `a1_unwrap` into `fn`; `fn(...a1_unwrap)`
 */
export declare function spread<I extends unknown, O extends unknown>(fn: (...a1: wrap_a1_type<I>) => O, a1_unwrap: I): O;
