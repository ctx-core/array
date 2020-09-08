import { falsy } from '@ctx-core/function'
import { slice } from './slice'
/**
 * Returns an Array from slicing an a1 from an a1's offset from position i
 */
export function offset_i_slice(a1:falsy|any[], i:number, offset = 1):undefined|any[] {
	return slice(a1, i * offset, (i + 1) * offset)
}
export const slice__i__offset = offset_i_slice
