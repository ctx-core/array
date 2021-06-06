import { zip_with } from './zip_with'
/**
 * Returns 2d Array of each item being the index value for each Array in `...a2`.
 */
export function zip</*@formatter:off*/
	I extends unknown[][] = unknown[][],
	O extends unknown[][] = I[number][number][][]
>/*@formatter:on*/(
	a2:I
):O {
	return zip_with<I, O>(a2)
}
export function maybe_zip</*@formatter:off*/
	I extends unknown[][] = unknown[][],
	O extends unknown[][] = I[number][number][][]
>/*@formatter:on*/(
	a2:I|undefined
):O|undefined {
	if (!a2) return
	return zip<I, O>(a2)
}
