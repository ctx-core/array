import type { maybe } from '@ctx-core/function'
/**
 * Returns the _last item in the in_a1
 */
export function _last<I = unknown>(in_a1:maybe<I[]>):maybe<I, undefined> {
	if (!in_a1) return
	const a1 = in_a1 as I[]
	return a1[a1.length - 1]
}
export const _last__a1 = _last
