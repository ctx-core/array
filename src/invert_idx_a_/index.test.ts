test('invert_idx_a_', ()=>{
	equal(invert_idx_a_([2, 1, 3, 0]), [3, 1, 0, 2])
})
test.run()
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { invert_idx_a_ } from '../index.js'
