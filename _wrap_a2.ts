import type { a2_nowrap_type } from './a2_nowrap_type'
import { _wrap_a1 } from '@ctx-core/function'
import { map } from './map'
/**
 * Returns `a2_nowrap_type` wrapped as a 2-dimensional array
 */
export function _wrap_a2(a2_nowrap:a2_nowrap_type):undefined|any[] {
	return map(_wrap_a1(a2_nowrap), _wrap_a1)
}
export const _a2__wrap = _wrap_a2
