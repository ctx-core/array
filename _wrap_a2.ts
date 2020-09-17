import { _wrap_a1, a2_nowrap_type } from '@ctx-core/function'
/**
 * Returns `a2_nowrap_type` wrapped as a 2-dimensional array
 */
export function _wrap_a2<I = unknown>(a2_nowrap:a2_nowrap_type<I>) {
	return (_wrap_a1<I|I[]>(a2_nowrap).map(a1_nowrap => _wrap_a1<I|I[]>(a1_nowrap))) as I[][]
}
export const _a2__wrap = _wrap_a2
