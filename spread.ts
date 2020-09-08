import { isArray } from '@ctx-core/object'
/**
 * Apply the spread operator on `a1` into `fn`; `fn(...a1)`
 */
export function spread(fn:(...any)=>any, a1:any|any[]):any {
	a1 = isArray(a1) ? a1 : [a1]
	return fn(...a1)
}
