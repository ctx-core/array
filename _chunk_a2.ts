import { slice } from './slice'
/**
 * Splits array into chunks
 */
export function _chunk_a2<I = unknown>(a1:I[], chunk_length:number):I[][] {
	let chunk_a2 = [] as I[][]
	for (let i = 0; i < a1.length; i += chunk_length) {
		chunk_a2.push(slice(a1, i, i + chunk_length))
	}
	return chunk_a2
}
export const _a2__chunk = _chunk_a2
