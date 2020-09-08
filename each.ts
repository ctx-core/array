import { falsy } from '@ctx-core/function'
/**
 * Iterate over each item in `a1` with `fn(a1[i], i)`.
 */
export function each(a1:falsy|any[], fn:(any, number)=>any):undefined|any[] {
	if (!a1) return
	for (let i = 0; i < a1.length; i++) {
		fn(a1[i], i)
	}
	return a1
}
