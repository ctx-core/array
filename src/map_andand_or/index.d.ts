import type { andand_key_T, andand_or_T } from '@ctx-core/function'
/**
 * Returns Array of mapped `a` with `_andand(...attr_a)` or the return value of `or_fn`.
 */
export declare function map_andand_or<
	In extends unknown = unknown, Out extends unknown = unknown
>(
	a:readonly In[],
	attr_a:readonly andand_key_T<In>[],
	or_fn:andand_or_T<In, Out>
):Out[]
export { map_andand_or as map__andand__or, }
