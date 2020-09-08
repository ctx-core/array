import { falsy } from '@ctx-core/function'
import { _is_match_type } from './_is_match_type'
/**
 * Returns first item in `a1` where `fn(a1[idx], idx)` is truthy.
 */
export function find(a1:falsy|any[], fn:_is_match_type):undefined|any {
	if (!a1) return
	for (let idx = 0; idx < a1.length; idx++) {
		const val = a1[idx]
		const map_val = fn(val, idx)
		if (map_val) return val
	}
}
