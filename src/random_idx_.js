/**
 * Returns a random index in `a`.
 */ export function random_idx_(a) {
	return Math.floor(Math.random() * a.length)
}
export { random_idx_ as _random_idx, random_idx_ as idx__random, }
