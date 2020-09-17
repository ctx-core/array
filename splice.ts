import type { maybe } from '@ctx-core/function'
/**
 * Calls splice on in_a1
 */
export function splice<I = unknown>(
	in_a1:maybe<I[]>,
	start:number,
	delete_count?:number,
	...arg_a1:I[]
):maybe<I[], undefined> {
	return in_a1 ? (in_a1 as I[]).splice(start, delete_count, ...arg_a1) : void 0
}
