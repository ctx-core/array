import { eq } from '@ctx-core/function'
/**
 * Returns a function that returns a [compact_a_ctx_I](#compact_a_ctx_I)
 */
export function entry_thold_a_compact_ctx_2(eq_ = eq) {
	return (in_val_a)=>{
		const idx_a = []
		const val_a = []
		if (in_val_a) {
			const val_a = in_val_a.slice()
			for (let i = 0; i < in_val_a.length; i++) {
				const val = in_val_a[i]
				const prev_val = in_val_a[i - 1]
				if (!i || (eq_ ? !eq_([
					val,
					prev_val
				]) : val !== prev_val)) {
					idx_a.push(i)
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
	entry_thold_a_compact_ctx_2 as entry_thold_a1_compact_ctx_fn2,
	entry_thold_a_compact_ctx_2 as _entry_thold_a1_compact_ctx_fn,
	entry_thold_a_compact_ctx_2 as _fn__ctx__compact__a1__thold__entry,
}
