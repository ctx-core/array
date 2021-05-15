import type { falsy } from '@ctx-core/function'
/**
 * Returns an `Object.<key,value>` of the given `key_hash[a1[][key]] = a1[]`.
 */
export function _key_hash<Val extends Record<string, any>>(
	a1:Val[], key:keyof Val
) {
	const key_hash = {} as Record<keyof Val, Val>
	if (a1) {
		for (let i = 0; i < a1.length; i++) {
			const item = a1[i]
			if (!item) continue
			key_hash[item[key] as keyof Val] = item
		}
	}
	return key_hash
}
export function _maybe_key_hash<Val extends { [key:string]:any }>(
	maybe_a1:Val[]|falsy, key:keyof Val
) {
	return _key_hash<Val>(maybe_a1 as Val[], key)
}
export {
	_key_hash as _hash__key,
}
