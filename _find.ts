import { find } from './find'
import type { _is_match_type } from './_is_match_type'
import type { maybe } from '@ctx-core/function'
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 */
export function _find<I>(fn:_is_match_type<I>) {
	return (maybe_a1:I[])=>find<I>(maybe_a1, fn) as maybe<I>
}
