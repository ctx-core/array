import type { a2_nowrap_type } from './a2_nowrap_type'
import { I } from '@ctx-core/combinators'
import { zipWith } from './zipWith'
/**
 * Returns 2d Array of each item being the index value for each Array in `...a2__zipWith`.
 */
export function zip(a2_nowrap:a2_nowrap_type):undefined|any[] {
	return zipWith(a2_nowrap, I)
}
