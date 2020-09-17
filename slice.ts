import type { maybe } from '@ctx-core/function'
/**
 * Calls slice on a1
 */
export function slice<I = unknown>(in_a1:maybe<I[]>, begin_idx?:number, end_idx?:number) {
	return in_a1 ? ((in_a1 as I[]).slice(begin_idx, end_idx) as I[]) : void 0
}
