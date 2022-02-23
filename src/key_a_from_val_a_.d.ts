/**
 * Returns Array of `obj[key_a[]]`.
 */
export declare function key_a_from_val_a_<Val extends unknown = unknown>(
	obj:Record<string, Val>, key_a:readonly string[]
):Val[];
export declare function maybe_key_a_from_val_a_<Val extends unknown = unknown, Or = null>(
	obj:Record<string, Val>|undefined, key_a:readonly string[], or?:Or
):Val[]|Or;
export {
	key_a_from_val_a_ as key_a1_from_val_a1_fn,
	key_a_from_val_a_ as _key_a1_from_val_a1,
	key_a_from_val_a_ as _a1__val__from__a1__key,
	maybe_key_a_from_val_a_ as maybe_key_a1_from_val_a1_fn,
	maybe_key_a_from_val_a_ as _maybe_key_a1_from_val_a1,
}
