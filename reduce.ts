import type { falsy } from '@ctx-core/function'
/**
 * Returns reduced `memo` iterating over `a1` with `fn(memo, a1[], i, a1)`.
 */
export function reduce(a1:falsy|any[], fn:reduce_fn_type, memo:any):undefined|any {
	if (!a1) return
	for (let i = 0; i < a1.length; i++) {
		const o = a1[i]
		memo = fn(memo, o, i, a1)
	}
	return memo
}
export type reduce_fn_type = (memo:any, item:any, idx:number, a1:any[])=>any[]
