import { slice } from './slice.js'
/**
 * Splits array into chunks
 */
export function chunk_aa_<I extends unknown = unknown>(
	a:I[], chunk_length:number
):I[][] {
	let chunk_aa = [] as I[][]
	for (let i = 0; i < a.length; i += chunk_length) {
		chunk_aa.push(slice<I>(a, i, i + chunk_length))
	}
	return chunk_aa
}
export {
	chunk_aa_ as chunk_a2_,
	chunk_aa_ as _a2__chunk,
	chunk_aa_ as _chunk_a2,
	chunk_aa_ as chunk_couple_fn,
}
