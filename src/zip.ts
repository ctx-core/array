import { zip_with } from './zip_with'
/**
 * Returns 2d Array of each item being the index value for each Array in `...a2`.
 */
export function zip<I extends unknown = unknown>(a2:I[][]) {
	return zip_with<I>(a2)
}
export function maybe_zip</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[][]
>/*@formatter:on*/(
	a2:I[][]|undefined
):O|undefined {
	return zip_with<I>(a2 as I[][]) as O
}
