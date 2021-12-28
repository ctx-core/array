import { filter, maybe_filter } from './filter.js'
/**
 * Returns Array of items not rejected by `fn`.
 */ export function reject(a, is_match_) {
	return filter(a, (value, idx)=>!is_match_(value, idx)
	)
}
export function maybe_reject(maybe_a, is_match_) {
	return maybe_filter(maybe_a, (value, idx)=>!is_match_(value, idx)
	)
}
//# sourceMappingURL=reject.js.map