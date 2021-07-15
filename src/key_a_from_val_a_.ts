import { map, maybe_map } from './map.js'
/**
 * Returns Array of `obj[key_a[]]`.
 */
export function key_a_from_val_a_</*@formatter:off*/
	Val extends unknown = unknown
/*@formatter:on*/>(
	obj:Record<string, Val>,
	key_a:string[]
):Val[] {
	return map<string, Val>(
		key_a, key=>obj[key] as Val
	)
}
export function maybe_key_a_from_val_a_</*@formatter:off*/
	Val extends unknown = unknown
/*@formatter:on*/>(
	obj:Record<string, Val>|undefined,
	key_a:string[]
):Val[]|undefined {
	if (!obj) return
	return maybe_map<string, Val>(
		key_a, key=>(obj as Record<string, Val>)[key] as Val
	)
}
export {
	key_a_from_val_a_ as key_a1_from_val_a1_fn,
	key_a_from_val_a_ as _key_a1_from_val_a1,
	key_a_from_val_a_ as _a1__val__from__a1__key,
	maybe_key_a_from_val_a_ as maybe_key_a1_from_val_a1_fn,
	maybe_key_a_from_val_a_ as _maybe_key_a1_from_val_a1,
}
