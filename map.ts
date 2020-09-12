import type { falsy } from '@ctx-core/function'
/**
 * Map return value of `fn(a1[], i)` into an Array.
 */
export function map(a1:falsy|any[], fn:(any, number)=>any):undefined|any[] {
	if (!a1) return
	const out_a1 = []
	for (let i = 0; i < a1.length; i++) {
		out_a1.push(fn(a1[i], i))
	}
	return out_a1
}
