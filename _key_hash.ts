import { falsy } from '@ctx-core/function'
/**
 * Returns an `Object.<key,value>` of the given `key_hash[a1[][key]] = a1[]`.
 */
export function _key_hash(a1:falsy|any[], key:string|number):any {
	const key_hash = {}
	if (a1) {
		for (let i = 0; i < a1.length; i++) {
			const item = a1[i]
			if (!item) continue
			key_hash[item[key]] = item
		}
	}
	return key_hash
}
export const _hash__key = _key_hash
