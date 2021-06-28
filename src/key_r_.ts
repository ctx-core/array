/**
 * Returns an `Object.<key,value>` of the given `key_hash[a[][key]] = a[]`.
 */
export function key_r_</*@formatter:off*/
	Key extends string,
	Obj extends { [k in Key]:string }
/*@formatter:on*/>(
	a:Obj[], key:Key
):Record<string, Obj> {
	const key_r = {} as Record<string, Obj>
	if (a) {
		for (let i = 0; i < a.length; i++) {
			const val = a[i]
			if (!val) continue
			key_r[val[key]] = val
		}
	}
	return key_r
}
export function maybe_key_r_</*@formatter:off*/
	Key extends string,
	Obj extends { [k in Key]:string }
/*@formatter:on*/>(
	maybe_a:Obj[]|undefined, key:Key
):Record<string, Obj> {
	return key_r_<Key, Obj>(maybe_a as Obj[], key)
}
export {
	key_r_ as key_h_,
	key_r_ as _key_hash,
	key_r_ as _hash__key,
	maybe_key_r_ as maybe_key_h_,
	maybe_key_r_ as _maybe_key_hash,
}
