/**
 * Returns `idx` % `length`.
 */ export function circular_idx_(length, idx = 0) {
	return (length + idx % length) % length || 0
}
export { circular_idx_ as _circular_idx, circular_idx_ as _idx__circular, }
//# sourceMappingURL=circular_idx_.js.map