import type { falsy } from '@ctx-core/function'
/**
 * Calls splice on a1
 */
export function splice(a1:falsy|any[], start:number, delete_count?:number, ...arg_a1:any):undefined|any[] {
	return a1 ? a1.splice(start, delete_count, ...arg_a1) : void 0
}
