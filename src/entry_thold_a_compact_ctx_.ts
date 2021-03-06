import { entry_thold_a_compact_ctx_2 } from './entry_thold_a_compact_ctx_2.js'
import type { compact_a_ctx_I } from './compact_a_ctx_I.js'
/**
 * Returns a [compact_a_ctx_I](#compact_a_ctx_I) of presumably sorted items in `val_a` at each index of the new item for each changed item.
 */
export function entry_thold_a_compact_ctx_<I extends unknown = unknown>(
	in_val_a:I[]|undefined
):compact_a_ctx_I<I> {
	return entry_thold_a_compact_ctx_2<I>()(in_val_a)
}
export {
	entry_thold_a_compact_ctx_ as entry_thold_a1_compact_ctx_fn,
	entry_thold_a_compact_ctx_ as _entry_thold_a1_compact_ctx,
	entry_thold_a_compact_ctx_ as _ctx__compact__a1__thold__entry,
}
