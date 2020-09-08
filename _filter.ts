import { _is_match_type } from './_is_match_type'
import { filter } from './filter'
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 */
export function _filter(_is_match:_is_match_type) {
	return a1=>filter(a1, _is_match)
}
export const _fn__filter = _filter
