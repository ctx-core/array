import type { falsy } from '@ctx-core/function'
import { map, maybe_map } from './map'
/**
 * Returns Array of `obj[key_a1[]]`.
 */
export function _key_a1_from_val_a1</*@formatter:off*/
	Val extends unknown = unknown
/*@formatter:on*/>(
	obj:Record<string, Val>,
	key_a1:string[]
):Val[] {
	return map<string, Val>(
		key_a1, key=>obj[key] as Val
	)
}
export function _maybe_key_a1_from_val_a1</*@formatter:off*/
	Val extends unknown = unknown
/*@formatter:on*/>(
	obj:Record<string, Val>|falsy,
	key_a1:string[]
):Val[]|undefined {
	if (!obj) return
	return maybe_map<string, Val>(
		key_a1, key=>(obj as Record<string, Val>)[key] as Val
	)
}
export {
	_key_a1_from_val_a1 as _a1__val__from__a1__key,
}
