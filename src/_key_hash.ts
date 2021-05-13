import type { falsy } from '@ctx-core/function'
/**
 * Returns an `Object.<key,value>` of the given `key_hash[a1[][key]] = a1[]`.
 */
export function _key_hash<Val extends { [key:string]:any }, Key extends keyof Val>(
	a1:Val[], key:Key
) {
	const key_hash = {} as Record<Key, Val>
	if (a1) {
		for (let i = 0; i < a1.length; i++) {
			const item = a1[i]
			if (!item) continue
			key_hash[item[key] as Key] = item
		}
	}
	return key_hash
}
export function _maybe_key_hash<Val extends { [key:string]:any }, Key extends keyof Val>(
	maybe_a1:Val[]|falsy, key:Key
) {
	return _key_hash<Val, Key>(maybe_a1 as Val[], key)
}
export {
	_key_hash as _hash__key,
}
