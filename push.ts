import type { maybe } from '@ctx-core/function'
/**
 * Calls push on in_a1
 */
export function push<I = unknown>(in_a1:maybe<I[]>, ...arg_a1:I[]):maybe<I[], undefined> {
	return in_a1 ? (in_a1 as I[]).push.apply(in_a1, arg_a1) : void 0
}
