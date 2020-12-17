import type { maybe, maybe_undefined } from '@ctx-core/function'
import { zipWith } from './zipWith'
/**
 * Returns 2d Array of each item being the index value for each Array in `...a2`.
 */
export function zip<I extends unknown = unknown>(a2:I[][]) {
	return zipWith<I>(a2)
}
export function maybe_zip<I extends unknown = unknown>(
	a2:maybe<I[][]>
):maybe_undefined<I[][]> {
	return zipWith<I>(a2 as I[][])
}
