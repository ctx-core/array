/**
 * Returns Array of `r[key_a[]]`.
 */
export function r_val_a_(r, key_a) {
	return key_a ? key_a.map(key=>r[key]) : Object.values(r)
}
export function maybe_r_val_a_(r, key_a, or = null) {
	if (!r) return or
	return r_val_a_(r, key_a)
}
export {
	r_val_a_ as key_a_from_val_a_,
	r_val_a_ as key_a1_from_val_a1_fn,
	r_val_a_ as _key_a1_from_val_a1,
	r_val_a_ as _a1__val__from__a1__key,
	maybe_r_val_a_ as maybe_key_a_from_val_a_,
	maybe_r_val_a_ as maybe_key_a1_from_val_a1_fn,
	maybe_r_val_a_ as _maybe_key_a1_from_val_a1,
}
