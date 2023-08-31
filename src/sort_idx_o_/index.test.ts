import { test } from 'uvu'
import { equal } from 'uvu/assert'
import type { sort_idx_o_T } from '../_types'
import { sort_idx_o_ } from './index'
test('sort_idx_o_|inference', ()=>{
	const sort_idx_ctx:sort_idx_o_T<number> = sort_idx_o_([1, 2, 0])
	equal(sort_idx_ctx, {
		sort_idx_a: [2, 0, 1],
		sort_val_a: [0, 1, 2],
	})
})
test.run()
