import { _is_match_type } from './_is_match_type'
import { filter } from './filter'
/**
 * Returns Array of items not rejected by `fn`.
 */
export function reject(a1, _is_match:_is_match_type):undefined|any[] {
	return filter(a1, (value, idx)=>!_is_match(value, idx))
}
