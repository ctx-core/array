import { andand_key_T } from '@ctx-core/function'
/**
 * Returns Array of mapped `a` with `_andand(...name_a)`.
 */
export declare function map_andand<In extends unknown = unknown, Out extends unknown = unknown>(
	a:readonly In[], ...name_a:readonly andand_key_T<In>[]
):Out[];
export declare function maybe_map_andand<Val extends unknown, Out extends unknown>(
	a:readonly Val[]|undefined, ...name_a:readonly andand_key_T<Val>[]
):Out[]|undefined;
export { map_andand as map__andand, }
