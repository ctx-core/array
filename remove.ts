import { falsy } from '@ctx-core/function'
import { remove_idx } from './remove_idx'
/**
 * Remove each `...item_a1` from `a1`.
 */
export function remove(a1:falsy|any[], ...item_a1:any):undefined|any[] {
	if (!a1) return
	for (let i = 0; i < item_a1.length; i++) {
		const key = item_a1[i]
		let index
		while ((index = a1.lastIndexOf(key)) > -1) {
			remove_idx(a1, index)
		}
	}
	return a1
}
export const remove__a1 = remove
