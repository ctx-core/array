import type { maybe } from '@ctx-core/function'
/**
 * Returns an `Object.<key,value>` of the given `key_hash[a1[][key]] = a1[]`.
 */
export function _key_hash<I = unknown>(in_a1:maybe<I[]>, key:string|number) {
	const key_hash = {} as Record<string, I>
	if (in_a1) {
		const a1 = in_a1 as I[]
		for (let i = 0; i < a1.length; i++) {
			const item = a1[i]
			if (!item) continue
			key_hash[item[key]] = item
		}
	}
	return key_hash
}
export const _hash__key = _key_hash
