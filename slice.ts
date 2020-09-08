import { falsy } from '@ctx-core/function'
/**
 * Calls slice on a1
 */
export function slice(a1:falsy|any[], begin_idx?:number, end_idx?:number):undefined|any[] {
	return a1 ? a1.slice(begin_idx, end_idx) : void 0
}
