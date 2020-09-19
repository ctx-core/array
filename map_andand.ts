import { _andand, andand, andand_name_type, maybe } from '@ctx-core/function'
import { map, maybe_map } from './map'
import type { a1_item_type } from './a1_item_type'
/**
 * Returns Array of mapped `a1` with `_andand(...name_a1)`.
 */
export function map_andand<I extends unknown[], O extends unknown[]>(
	a1:I,
	...name_a1:andand_name_type<a1_item_type<I>, a1_item_type<O>>[]
) {
	return map<I, (a1_item_type<I>|a1_item_type<O>)[]>(a1,
		item=>andand<a1_item_type<I>, a1_item_type<O>>(
			item, ...name_a1
		))
}
export const map__andand = map_andand
export function maybe_map_andand<I extends unknown[], O extends unknown[]>(
	a1:maybe<I[]>,
	...name_a1:andand_name_type<a1_item_type<I>, a1_item_type<O>>[]
) {
	return maybe_map<I, O>(a1 as I, _andand<a1_item_type<I>, a1_item_type<O>>(...name_a1))
}
