import {
	_entry_thold_a1_compact_ctx_fn
} from './_entry_thold_a1_compact_ctx_fn'
import type { thold_a1_compact_ctx_fn_type } from './thold_a1_compact_ctx_fn_type'
/**
 * Returns a [compact_a1_ctx_type](#compact_a1_ctx_type) of presumably sorted items in `val_a1` at each index of the new item for each changed item.
 */
export const _entry_thold_a1_compact_ctx =
	_entry_thold_a1_compact_ctx_fn() as thold_a1_compact_ctx_fn_type
export {
	_entry_thold_a1_compact_ctx as _ctx__compact__a1__thold__entry,
}