import { _entry_thold_a1_compact_ctx_fn } from './_entry_thold_a1_compact_ctx_fn'
/**
 * Returns a [compact_a1_ctx_I](#compact_a1_ctx_I) of presumably sorted items in `val_a1` at each index of the new item for each changed item.
 */
export function _entry_thold_a1_compact_ctx<I extends unknown = unknown>(
	in_val_a1:I[]|undefined
) {
	return _entry_thold_a1_compact_ctx_fn<I>()(in_val_a1)
}
export {
	_entry_thold_a1_compact_ctx as _ctx__compact__a1__thold__entry,
}
