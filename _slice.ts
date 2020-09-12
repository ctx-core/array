import type { falsy } from '@ctx-core/function'
import { slice } from './slice'
/**
 * Returns a `slice` function with the given `...arg_a1` that takes a Array `a1` as it's argument.
 */
export function _slice(...arg_a1:any):(a1:falsy|any[])=>undefined|any[] {
	return a1=>slice(a1, ...arg_a1)
}
export const _fn__slice = _slice
