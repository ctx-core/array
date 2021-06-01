import { zip_with } from './zip_with'
/**
 * Returns 2d Array of each item being the index value for each Array in `...a2`.
 */
export function zip<I extends unknown = unknown>(
	a2:I[][]
):I[] {
	return zip_with<I>(a2)
}
export function maybe_zip<I extends unknown = unknown>(
	a2:I[][]|undefined
):I[]|undefined {
	if (!a2) return
	return zip<I>(a2)
}
