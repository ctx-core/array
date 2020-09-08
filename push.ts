import { falsy } from '@ctx-core/function'
/**
 * Calls push on a1
 */
export function push(a1:falsy|any[], ...arg_a1:any):undefined|any[] {
	return a1 ? a1.push.apply(a1, arg_a1) : void 0
}
