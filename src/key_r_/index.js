/**
 * Returns an `Object.<key,value>` of the given `key_hash[a[][key]] = a[]`.
 * @param a{Record<string, string>[]}
 * @param key{string}
 * @returns {Record<string, Record<string, string>>}}
 */
export function key_r_(a, key) {
	const key_r = {}
	if (a) {
		for (let i = 0; i < a.length; i++) {
			const val = a[i]
			if (!val) continue
			key_r[val[key]] = val
		}
	}
	return key_r
}
/**
 * @param maybe_a{Record<string, string>[]|undefined}
 * @param key{string}
 * @param or{Record<string, string>[]|null|undefined}
 * @returns {Record<string, Record<string, string>>|null|unknown}
 */
export function maybe_key_r_(
	maybe_a,
	key,
	or = null
) {
	return maybe_a ? key_r_(maybe_a, key) : or
}
export {
	key_r_ as key_h_,
	key_r_ as _key_hash,
	key_r_ as _hash__key,
	maybe_key_r_ as maybe_key_h_,
	maybe_key_r_ as _maybe_key_hash,
}
