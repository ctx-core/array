import { map, maybe_map } from './map'
import type { maybe } from '@ctx-core/function'
/**
 * Returns Array of `obj[key_a1[]]`.
 */
export function _key_a1_from_val_a1<I extends unknown = unknown>(
	obj:I,
	key_a1:string[]
):I[keyof I][] {
	return map<string, I[keyof I]>(
		key_a1, key=>obj[key]
	)
}
export const _a1__val__from__a1__key = _key_a1_from_val_a1
export function _maybe_key_a1_from_val_a1<I extends unknown = unknown>(
	obj:maybe<I>,
	key_a1:string[]
):maybe<maybe<I[keyof I][], undefined>, undefined> {
	if (!obj) return
	return maybe_map<string, I[keyof I]>(
		key_a1, key=>obj[key]
	)
}
