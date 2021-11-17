import type { compact_a_ctx_I } from './compact_a_ctx_I.js'
import { exit_thold_a_compact_ctx_2 } from './exit_thold_a_compact_ctx_2.js'
/**
 * Returns a [compact_a_ctx_I](#compact_a_ctx_I) of presumably sorted items in `val_a` at each index of the old item for each changed item.
 */
export function exit_thold_a_compact_ctx_<I extends unknown = unknown>(
	in_val_a?:I[]
):compact_a_ctx_I<I> {
	return exit_thold_a_compact_ctx_2<I>()(in_val_a)
}
export {
	exit_thold_a_compact_ctx_ as exit_thold_a1_compact_ctx_fn,
	exit_thold_a_compact_ctx_ as _exit_thold_a1_compact_ctx,
	exit_thold_a_compact_ctx_ as _ctx__compact__a1__thold__exit
}
