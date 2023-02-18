import { remove_idx } from '../remove_idx/index.js'
/**
 * Remove each `...item_a` from `a`.
 * @param a{unknown[]}
 * @param item_a{unknown}
 * @returns {unknown}
 */
export function remove(a, ...item_a) {
	for (let i = 0; i < item_a.length; i++) {
		const key = item_a[i]
		let index
		while ((index = a.lastIndexOf(key)) > -1) {
			remove_idx(a, index)
		}
	}
	return a
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param item_a{unknown}
 * @returns {unknown}
 */
export function maybe_remove(maybe_a, ...item_a) {
	if (!maybe_a) return
	return remove(maybe_a, ...item_a)
}
export { remove as remove__a1, }
