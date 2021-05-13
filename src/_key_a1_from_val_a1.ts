import type { falsy } from '@ctx-core/function'
import { map, maybe_map } from './map'
/**
 * Returns Array of `obj[key_a1[]]`.
 */
export function _key_a1_from_val_a1</*@formatter:off*/
	Val extends object = object,
	Out = Val[keyof Val]
/*@formatter:on*/>(
	obj:Val,
	key_a1:string[]
):Out[] {
	return map<string, Out>(
		key_a1, key=>obj[key]
	)
}
export function _maybe_key_a1_from_val_a1</*@formatter:off*/
	Val extends object = object,
	Out = Val[keyof Val]
/*@formatter:on*/>(
	obj:Val|falsy,
	key_a1:string[]
):Out[]|undefined {
	if (!obj) return
	return maybe_map<string, Out>(
		key_a1, key=>(obj as Val)[key]
	)
}
export {
	_key_a1_from_val_a1 as _a1__val__from__a1__key,
}
