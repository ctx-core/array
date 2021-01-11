import type { maybe } from '@ctx-core/function'
/**
 * Returns an `Object.<key,value>` of the given `key_hash[a1[][key]] = a1[]`.
 */
export function _key_hash<I extends object[] = object[]>(a1: I, key: string|number) {
	const key_hash = {} as Record<string, I[number]>
	if (a1) {
		for (let i = 0; i < a1.length; i++) {
			const item = a1[i]
			if (!item) continue
			key_hash[item[key]] = item
		}
	}
	return key_hash
}
export function _maybe_key_hash<I extends object[] = object[]>(
	maybe_a1: maybe<I>, key: string|number
) {
	return _key_hash<I>(maybe_a1 as I, key)
}
export {
	_key_hash as _hash__key,
}
