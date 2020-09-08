import { slice } from './slice'
/**
 * Splits array into chunks
 */
export function _chunk_a2(a1:any[], chunk_length:number):any[] {
	let chunk_a1 = []
	for (let i = 0; i < a1.length; i += chunk_length) {
		chunk_a1.push(slice(a1, i, i + chunk_length))
	}
	return chunk_a1
}
export const _a2__chunk = _chunk_a2
