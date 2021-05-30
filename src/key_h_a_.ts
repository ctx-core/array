import { wrap_a_, concat } from '@ctx-core/function'
/**
 * Returns a hash of arrays grouped by each key in each `ctx` in `ctx_a`.
 */
export function key_h_a_<Val extends object = object>(
	ctx_a_nowrap:(Record<string, Val>|Record<string, Val>[])
) {
	const ctx_a:Record<string, Val>[] = wrap_a_<Record<string, Val>>(ctx_a_nowrap)
	const a_key_h_a:Record<string, Val[]> = {}
	for (let i = 0; i < ctx_a.length; i++) {
		const ctx = ctx_a[i]
		for (let key in ctx) {
			const value:Val = ctx[key]
			a_key_h_a[key] = concat(a_key_h_a[key] || [], value) as Val[]
		}
	}
	return a_key_h_a
}
export {
	key_h_a_ as key_h_a1_fn,
	key_h_a_ as _key_h_a1,
	key_h_a_ as _a1_key_hash,
	key_h_a_ as _hash__key__a1,
}
