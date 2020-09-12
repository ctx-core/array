import type { falsy } from '@ctx-core/function'
/**
 * Returns first return value of `fn(a1[idx], idx)` where `fn(a1[idx], idx)` is truthy.
 */
export function map_find(a1:falsy|any[], fn:(any, number)=>falsy|any[]):undefined|any[] {
	if (!a1) return
	for (let idx = 0; idx < a1.length; idx++) {
		const value = a1[idx]
		const map_value = fn(value, idx)
		if (map_value) return map_value
	}
}
export const find__map = map_find
