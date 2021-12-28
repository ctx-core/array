import { maybe_slice, slice } from './slice.js'
/**
 * Returns an Array from slicing an a from an a's offset from position i
 */ export function offset_i_slice(a, i, offset = 1) {
	return slice(a, i * offset, (i + 1) * offset)
}
export function maybe_offset_i_slice(maybe_a, i, offset = 1) {
	return maybe_slice(maybe_a, i * offset, (i + 1) * offset)
}
export { offset_i_slice as slice__i__offset, }
//# sourceMappingURL=offset_i_slice.js.map