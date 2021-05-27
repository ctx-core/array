/**
 * Returns an `Object.<key,value>` of the given `key_hash[a1[][key]] = a1[]`.
 */
export function _key_hash</*@formatter:off*/
	Key extends string,
	Obj extends { [k in Key]:string }
/*@formatter:on*/>(
	a1:Obj[], key:Key
):Record<string, Obj> {
	const key_hash = {} as Record<string, Obj>
	if (a1) {
		for (let i = 0; i < a1.length; i++) {
			const val = a1[i]
			if (!val) continue
			key_hash[val[key]] = val
		}
	}
	return key_hash
}
export function _maybe_key_hash</*@formatter:off*/
	Key extends string,
	Obj extends { [k in Key]:string }
/*@formatter:on*/>(
	maybe_a1:Obj[]|undefined, key:Key
):Record<string, Obj> {
	return _key_hash<Key, Obj>(maybe_a1 as Obj[], key)
}
export {
	_key_hash as _hash__key,
}
