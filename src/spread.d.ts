import { wrap_a1_type } from '@ctx-core/function';
/**
 * Apply the spread operator on `a1_unwrap` into `fn`; `fn(...a1_unwrap)`
 */
export declare function spread<Val extends unknown = unknown, Out extends unknown = unknown>(fn: (...a1: wrap_a1_type<Val>) => Out, a1_unwrap: Val): Out;
