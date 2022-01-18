import { eq } from '@ctx-core/function'
/**
 * Returns a function that returns a [compact_a_ctx_I](#compact_a_ctx_I)
 */
export function exit_thold_a_compact_ctx_2(eq_ = eq) {
	return (in_val_a)=>{
		const idx_a = []
		const val_a = []
		if (in_val_a) {
			const val_a = in_val_a
			const val_a_length = val_a.length
			for (let idx = 0; idx < val_a.length; idx++) {
				const val = val_a[idx]
				const next_idx = idx + 1
				const next_val = val_a[next_idx]
				if (next_idx === val_a_length || (eq_ ? !eq_([
					val,
					next_val
				]) : val !== next_val)) {
					idx_a.push(idx)
					val_a.push(val)
				}
			}
		}
		return {
			idx_a,
			val_a
		}
	}
}
export {
	exit_thold_a_compact_ctx_2 as exit_thold_a1_compact_ctx_fn2,
	exit_thold_a_compact_ctx_2 as _exit_thold_a1_compact_ctx_fn,
	exit_thold_a_compact_ctx_2 as _fn__ctx__compact__a1__thold__exit,
}
