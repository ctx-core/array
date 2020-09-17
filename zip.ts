import { zipWith } from './zipWith'
import type { a2_nowrap_type } from '@ctx-core/function'
/**
 * Returns 2d Array of each item being the index value for each Array in `...a2__zipWith`.
 */
export function zip<I = unknown>(a2_nowrap:a2_nowrap_type<I>):undefined|I[] {
	return zipWith<I>(a2_nowrap, (v: I) => v)
}
