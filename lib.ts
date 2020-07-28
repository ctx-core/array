/**
 * @module @ctx-core/array/lib.js
 */
/**
 * ArrayLike object (ie arguments)
 * @property {integer} length
 * @typedef ArrayLike
 */
import { isArray } from '@ctx-core/object'
import {
	falsy,
	_andand,
	_andand_,
	_andand__or,
	_eq,
	eq,
	concat,
	_wrap_a1,
} from '@ctx-core/function'
export { isArray, concat, _wrap_a1 }
import {
	_union__set,
	_intersection__set,
	_difference__set,
} from '@ctx-core/set'
import { I, I__ } from '@ctx-core/combinators'
import { a2_nowrap_type } from './a2_nowrap_type'
type compare = (a:any, b:any)=>number
type compare__1 = (any, number?)=>number
type _is_match = (any, number?)=>boolean
type _val__item_key_idx = (val:any, item:any, string, number)=>any
/**
 * @typedef {*|*[]} nowrap__a1
 */
/**
 * @typedef {[]|*[][]} a2_nowrap_type
 */
/**
 * @typedef {function(...*): *} fn__spread
 */
/**
 * Apply the spread operator on `a1` into `fn`; `fn(...a1)`
 * @param {function} fn
 * @param {[]} a1
 * @returns {*}
 */
export function spread(fn:(...any)=>any, a1:any|any[]):any {
	a1 = isArray(a1) ? a1 : [a1]
	return fn(...a1)
}
/**
 * Returns a function taking an array calling [spread](#spread)
 * @param {function} fn
 * @returns {function(*[]): *}
 */
export function _spread(fn:(...any)=>any):(a1:any|any[])=>any {
	return a1=>spread(fn, a1)
}
/**
 * Returns `a2_nowrap_type` wrapped as a 2-dimensional array
 * @param {[]} a2_nowrap
 * @returns {*[][]}
 */
export function _wrap_a2(a2_nowrap:a2_nowrap_type):undefined|any[] {
	return map(_wrap_a1(a2_nowrap), _wrap_a1)
}
export const _a2__wrap = _wrap_a2
/**
 * Is a_a1 `===` b_a1? Checks first level equality.
 * @param {*[]} a1__a
 * @param {*[]} b_a1
 * @returns {Boolean}
 */
export function _eql_a1(a_a1:any[], b_a1:any[]):boolean {
	if (a_a1 === b_a1) return true
	if (a_a1 == null || b_a1 == null) return false
	if (a_a1.length != b_a1.length) return false
	for (let i = 0; i < a_a1.length; ++i) {
		if (a_a1[i] !== b_a1[i]) return false
	}
	return true
}
export const _eql__a1 = _eql_a1
/**
 * Is a_a1 `===` to b_a1 based on `fn(a, b, i)`? Checks first level equality.
 * @param {*[]} a_a1
 * @param {*[]} b_a1
 * @param {function(*, *, Int)} fn
 * @returns {Boolean}
 */
export function _eql_fn_a1(a_a1:any[], b_a1:any[], fn:(a:any, b:any, number)=>unknown):boolean {
	if (a_a1 === b_a1) return true
	if (a_a1 == null || b_a1 == null) return false
	if (a_a1.length != b_a1.length) return false
	for (let i = 0; i < a_a1.length; ++i) {
		if (!fn(a_a1[i], b_a1[i], i)) return false
	}
	return true
}
export const _eql__a1__fn = _eql_fn_a1
/**
 * Returns a hash of arrays grouped by each key in each `ctx` in `ctx_a1`.
 * @param {a1_nowrap} ctx_a1_nowrap
 * @returns {Object.<string, Array>}
 */
export function _a1_key_hash(ctx_a1_nowrap:any|any[]):any {
	const ctx_a1 = _wrap_a1(ctx_a1_nowrap)
	const a1_key_hash = {}
	for (let i = 0; i < ctx_a1.length; i++) {
		const ctx = ctx_a1[i]
		for (let key in ctx) {
			const value = ctx[key]
			a1_key_hash[key] = concat(
				a1_key_hash[key] || [],
				value
			)
		}
	}
	return a1_key_hash
}
export const _hash__key__a1 = _a1_key_hash
/**
 * Returns length of `a1`
 * @param {*[]|falsy} a1
 * @returns {Int|falsy}
 */
export function _a1_length(a1:any[]):undefined|number {
	return a1 ? a1.length : void 0
}
export const _length__a1 = _a1_length
/**
 * Returns true if `a1` is has a length
 * @param {*[]|falsy} a1
 * @returns {boolean}
 */
export function _a1_present(a1:any|any[]):boolean {
	return !!_a1_length(a1)
}
export const _present__a1 = _a1_present
export const concat__a1 = concat
/**
 * Returns true if argument is an array with more than one item
 * @param {*[]|falsy} a1
 * @returns {boolean}
 */
export function _has_multiple(a1:any[]):boolean {
	return _a1_length(a1) > 1
}
export const _has__multiple = _has_multiple
export const _has__multiple__a1 = _has_multiple
/**
 * Array#`concat`, setting falsy values to an empty Array (`[]`).
 * @param {*[]} a1
 * @param {...*} rest_a1
 * @returns {*[]}
 */
export function concat_truthy_a1(a1:any|any[], ...rest_a1:any[]):any[] {
	let a1__ = a1 ? _wrap_a1(a1) : []
	for (let i = 0; i < rest_a1.length; i++) {
		a1__ = a1__.concat(rest_a1[i] || [])
	}
	return a1__
}
export const concat__default__a1 = concat_truthy_a1
export const concat__truthy = concat_truthy_a1
/**
 * Delegates to Array#indexOf
 * @param {*[]} a1
 * @param {string} key
 * @returns {Boolean}
 */
export function indexOf(a1:any[], key:string|number):number {
	return a1.indexOf(key)
}
/**
 * Insert `...a1__item` into `a1` at position `idx`.
 * @param {*[]} a1
 * @param {Int} idx
 * @param {...[]} a1__item
 * @returns {Array}
 */
export function insert(a1:any[], idx:number, ...a1__item:any):any[] {
	return a1.splice(idx, 0, ...a1__item)
}
/**
 * Remove `count = 1` items from `a1` at position `idx`.
 * @param {*[]} a1
 * @param {Int} idx
 * @param {Int} count
 * @returns {*[]}
 */
export function remove_idx(a1:any[], idx:number, count = 1):any[] {
	return a1.splice(idx, count)
}
export const remove__idx = remove_idx
export const remove__index = remove_idx
/**
 * Remove each `...a1__item` from `a1`.
 * @param {*[]} a1
 * @param {...*} a1__item
 * @returns {*[]}
 */
export function remove(a1:falsy|any[], ...a1__item:any):undefined|any[] {
	if (!a1) return
	for (let i = 0; i < a1__item.length; i++) {
		const key = a1__item[i]
		let index
		while ((index = a1.lastIndexOf(key)) > -1) {
			remove__index(a1, index)
		}
	}
	return a1
}
export const remove__a1 = remove
/**
 * Returns the first item in `a1`.
 * @param {*[]} a1
 * @returns {*|falsy}
 */
export function _first(a1:falsy|any[]):undefined|any {
	return a1 ? a1[0] : void 0
}
/**
 * Returns the _last item in the a1
 * @param {*[]} a1
 * @returns {*|falsy} Last item in the a1
 */
export function _last(a1:falsy|any[]):undefined|any {
	return a1 ? a1[a1.length - 1] : void 0
}
export const _last__a1 = _last
/**
 * Splits array into chunks
 * @param {*[]} a1
 * @param {Int} chunk_length Length of each chunk
 * @returns {*[][]} The 2d array of chunks
 */
export function _chunk_a2(a1:any[], chunk_length:number):any[] {
	let a1__chunk = []
	for (let i = 0; i < a1.length; i += chunk_length) {
		a1__chunk.push(slice(a1, i, i + chunk_length))
	}
	return a1__chunk
}
export const _a2__chunk = _chunk_a2
/**
 * Removes null values from the array
 * @param {*[]} a1
 * @returns {*[]} The array with null values removed
 */
export function compact(a1:falsy|any[]):undefined|any[] {
	if (!a1) return
	const a1_ = []
	for (let i = a1.length; i >= 0; --i) {
		const val = a1[i]
		if (val) {
			a1_.push(val)
		}
	}
	return a1_
}
export const compact_a1 = compact
export const compact__a1 = compact
/**
 * @typedef {function(*, Int, *[]): *} predicate
 */
/**
 * Returns true if every `predicate(value)` is truthy
 * @param {*[]} a1
 * @param {predicate} predicate - The every predicate function
 * @returns {Boolean} true if every `predicate(value)` is truthy
 */
export function every(
	a1:any[],
	predicate:(item:any, number, a1)=>unknown
):boolean {
	if (!a1) return
	let idx = -1
	const length = a1.length
	while (++idx < length) {
		if (!predicate(a1[idx], idx, a1)) {
			return false
		}
	}
	return true
}
export const every_a1 = every
export const every__a1 = every
/**
 * Returns a function that returns from [every](#every) with the given `predicate` function.
 * @param {predicate} predicate - The every predicate function
 * @returns {function(*[]): Boolean}
 */
export function _every(predicate:(any, number, a1)=>unknown):(a1:any[])=>boolean {
	return a1=>every(a1, predicate)
}
export const _every_fn = _every
export const _fn__every = _every
/**
 * Returns true if some `predicate(value)` is truthy
 * @param {*[]} a1
 * @param {predicate} predicate - The some predicate function
 * @returns {Boolean} true if some `predicate(value)` is truthy
 */
export function some(a1:any[], predicate:(any, number, a1)=>unknown):boolean {
	let index = -1
	const length = a1.length
	while (++index < length) {
		if (predicate(a1[index], index, a1)) {
			return true
		}
	}
	return false
}
export const some_a1 = some
export const some__a1 = some
/**
 * Returns a function that returns from [some](#some) with given `predicate` function.
 * @param {predicate} predicate - The some predicate function
 * @returns {function(*[]): Boolean}
 */
export function _some(predicate:(any, number, a1)=>unknown):(a1:any[])=>boolean {
	return a1=>some(a1, predicate)
}
export const _some_fn = _some
export const _fn__some = _some
/**
 * Returns the _union of n arrays
 * @param {a2_nowrap_type} a2_nowrap - Performs the _union on the 2d array.
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _union(a2_nowrap:a2_nowrap_type):any[] {
	const a2 = _wrap_a2(a2_nowrap)
	return Array.from(_union__set(a2))
}
export const _union__a1 = _union
export const _uniq = _union
export const _uniq__a1 = _uniq
/**
 * Returns the _intersection of n arrays
 * @param {a2_nowrap_type} a2_nowrap - Performs the _intersection on the arrays.
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _intersection(a2_nowrap:a2_nowrap_type):any[] {
	const a2 = _wrap_a2(a2_nowrap)
	return Array.from(_intersection__set(a2))
}
export const _intersection__a1 = _intersection
/**
 * Returns the _difference of n arrays
 * @param {a2_nowrap_type} a2_nowrap - Performs the _difference on the 2d Array.
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _difference(a2_nowrap:a2_nowrap_type):any[] {
	const a2 = _wrap_a2(a2_nowrap)
	return Array.from(_difference__set(a2))
}
export const _difference__a1 = _difference
/**
 * splice out any `array` elements matching `selector`
 * @param {*[]} a1
 * @param {function(*, Int, *[])} selector - truthy elements are spliced out
 * @returns {*[]}
 */
export function splice__selector(a1:any[], selector:(any, number, a1)=>unknown):any[] {
	const index = a1.findIndex(selector)
	if (index > -1) {
		a1.splice(index, 1)
	}
	return a1
}
export const splice__selector__a1 = splice__selector
/**
 * @typedef {function(*, *): Int|falsy} fn__compare
 */
/**
 * Sort items in `a1` by the `compare` function
 * @param {*[]} a1
 * @param {compare} compare
 * @returns {(Array|null|undefined)}
 */
export function sort(a1:falsy|any[], compare?:compare):undefined|any[] {
	return a1 ? a1.sort(compare) : void 0
}
/**
 * Reverses the order of items in `a1` by mutating `a1`.
 * @param {*[]} a1
 * @returns {*[]}
 */
export function reverse(a1:falsy|any[]):undefined|any[] {
	return a1 ? a1.reverse() : void 0
}
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 * @param {fn__compare} compare
 * @returns {function(*=): Array}
 */
export function _sort(compare?:compare):(a1:falsy|any[])=>undefined|any[] {
	return a1=>sort(a1, compare)
}
export const _fn__sort = _sort
/**
 * Returns a basic ascending or descending `compare` function to be used for sorting.
 * @param {Boolean} [asc=true] ascending or descending
 * @returns {fn__compare} Function that compares two values
 */
export function _compare(asc = true):compare {
	return (a, b)=>{
		if (a < b) return asc ? -1 : 1
		if (a > b) return asc ? 1 : -1
		return 0
	}
}
export const _fn__compare = _compare
/**
 * Compare function to sort by ascending order.
 * @type {fn__compare}
 */
export const compare__asc = _compare(true)
export const fn__compare__asc = compare__asc
/**
 * Compare function to sort by descending order.
 * @type {fn__compare}
 */
export const compare__desc = _compare(false)
export const fn__compare__desc = compare__desc
/**
 * Return a compare function to sort on key values.
 * @param {string} key - Return function compares on `Object[key]`
 * @param {Boolean} [asc=true] ascending or descending
 * @returns {fn__compare} Function that compares two `value[key]`
 */
export function _key_compare(key:any, asc = true):(a:any, b:any)=>number {
	return (a, b)=>{
		if (a[key] < b[key]) return asc ? -1 : 1
		if (a[key] > b[key]) return asc ? 1 : -1
		return 0
	}
}
export const _compare__key = _key_compare
export const _sort__key = _key_compare
export const _sort__key__a1 = _key_compare
/**
 * Sorts a copy of `a1` by the `compare` function.
 * @param {*[]} a1
 * @param {fn__compare}
 * @returns {*[]}
 */
export function _a1__sort(a1:falsy|any[], compare?:compare):undefined|any[] {
	return sort(slice(a1, 0), compare)
}
/**
 * Returns an Array of incrementing index (`idx`) values with `start=0`.
 * @param {Int} count
 * @param {Int} start=0
 * @returns {Int[]}
 */
export function _idx_a1(count:number, start = 0):any[] {
	const idx_a1 = []
	for (let i = 0; i < count; i++) {
		idx_a1.push(start + i)
	}
	return idx_a1
}
export const _a1__idx = _idx_a1
/**
 * Returns an Array of indices inverted from `idx_a1`.
 * @param {Int[]} idx_a1
 * @returns {*[]|*}
 * @example `_invert_idx_a1([2, 1, 3, 0]) -> [3, 1, 0, 2]`
 */
export function _invert_idx_a1(idx_a1:falsy|number[]):undefined|any[] {
	if (!idx_a1) return
	const a1__idx__invert = []
	for (let i = 0; i < idx_a1.length; i++) {
		a1__idx__invert[idx_a1[i]] = i
	}
	return a1__idx__invert
}
export const _a1__idx__invert = _invert_idx_a1
export type ctx__idx__sort = {
	a1__idx__sort:number[],
	a1__val__sort:any[],
}
/**
 * Array of sort indices.
 * @typedef {Int[]} a1__idx__sort
 */
/**
 * Array of sort values.
 * @typedef {Int[]} a1__val__sort
 */
/**
 * `ctx` of sorted values & indices.
 * @typedef {{
 *   a1__idx__sort: a1__idx__sort,
 *   a1__val__sort: a1__val__sort,
 * }} ctx__idx__sort
 */
/**
 * Returns a [ctx__idx__sort](#ctx__idx__sort).
 * @param {*[]} a1
 * @param {fn__compare} compare
 * @returns {ctx__idx__sort}
 */
export function _ctx__idx__sort(a1:falsy|any[], compare:compare = _compare()):ctx__idx__sort {
	const a1__sort = []
	const a1__val__sort = []
	const a1__idx__sort = []
	if (a1) {
		for (let i = 0; i < a1.length; i++) {
			a1__sort.push([a1[i], i])
		}
		sort(a1__sort, (l, r)=>compare(l[0], r[0]))
		for (let i = 0; i < a1.length; i++) {
			a1__idx__sort.push(a1__sort[i][1])
			a1__val__sort[i] = a1__sort[i][0]
		}
	}
	return {
		a1__idx__sort,
		a1__val__sort,
	}
}
type fn__a1__ctx__idx__sort = (a1:any[])=>ctx__idx__sort
/**
 * Returns function that returns [_ctx__idx__sort](#_ctx__idx__sort).
 * @param {fn__compare} compare
 * @returns {function(*[]): ctx__idx__sort}
 */
export function _fn__ctx__idx__sort(compare?:compare):fn__a1__ctx__idx__sort {
	return a1=>_ctx__idx__sort(a1, compare)
}
/**
 * Returns an Array of sorted values from [ctx__idx__sort](#ctx__idx__sort).a1__val__sort
 * @param {ctx__idx__sort} ctx__idx__sort
 * @returns {*[]|falsy}
 */
export function _a1__val__sort(ctx__idx__sort:falsy|ctx__idx__sort):undefined|any[] {
	return ctx__idx__sort ? ctx__idx__sort.a1__val__sort : void 0
}
/**
 * Returns an Array of sorted indices from [ctx__idx__sort](#ctx__idx__sort).a1__idx__sort
 * @param {ctx__idx__sort} ctx__idx__sort
 * @returns {*[]|falsy}
 */
export function _a1__idx__sort(ctx__idx__sort:falsy|ctx__idx__sort):undefined|number[] {
	return ctx__idx__sort ? ctx__idx__sort.a1__idx__sort : void 0
}
/**
 * Sort `val_a1` by an array of indices in `a1__idx__sort`.
 * @param {*[]} val_a1
 * @param {Int[]} a1__idx__sort
 * @returns {Array}
 */
export function _a1__sort__idx(val_a1:falsy|any[], a1__idx__sort:falsy|number[]):undefined|number[] {
	if (!a1__idx__sort || !val_a1) return
	const a1__sort__idx = []
	for (let i = 0; i < a1__idx__sort.length; i++) {
		const idx = a1__idx__sort[i]
		a1__sort__idx.push(val_a1[idx])
	}
	return a1__sort__idx
}
/**
 * Returns [ctx__idx__sort](#ctx__idx__sort) derived from `val_a1` sorted by `a1__idx__sort`.
 * @param {Array} val_a1
 * @param {Array<Int>} a1__idx__sort
 * @returns {ctx__idx__sort}
 */
export function _ctx__idx__sort__a1__sort__idx(val_a1:any[], a1__idx__sort:number[]):ctx__idx__sort {
	const a1__val__sort = _a1__sort__idx(val_a1, a1__idx__sort)
	return {
		a1__val__sort,
		a1__idx__sort,
	}
}
/**
 * Returns the rank of the items where the compare function === 0
 * @param {Array} a1
 * @param {Function} compare__1 - rank compare function
 * @returns {integer} the rank of the items where the compare function === 0
 */
export function rank(a1:any[], compare__1:compare__1):number {
	let rank__i = 1
	for (let i = 0; i < a1.length; i++) {
		if (compare__1(a1[i]) > 0) {
			rank__i++
		}
	}
	return rank__i
}
export const rank__a1 = rank
/**
 * Returns the rank of the item where the compare function === 0, using binarySort
 * @param {Array} a1
 * @param {Function} compare__1 - rank compare function
 * @returns {integer} the rank of the items where the compare function === 0
 */
export function rank__binarySort(a1:any[], compare__1:compare__1):number {
	let min_index = 0
	let max_index = a1.length - 1
	let current_index
	let current_element
	while (min_index <= max_index) {
		current_index = (min_index + max_index) / 2 | 0
		current_element = a1[current_index]
		const compare__sort = compare__1(current_element, current_index)
		if (compare__sort > 0) {
			min_index = current_index + 1
		} else if (compare__sort < 0) {
			max_index = current_index - 1
		} else {
			return current_index
		}
	}
	return -1
}
export const rank__binarySort__a1 = rank__binarySort
/**
 * Returns an array sorted by `item.name`
 * @param {Array} a1
 * @returns {Array.<*>} array sorted by `item.name`
 */
export function sort__name(a1:any[]):any[] {
	return (slice(a1, 0) || []).sort(_sort__key('name'))
}
export const sort__name__a1 = sort__name
/**
 * Returns a Hash with a key for each item in `a1__value` & value set to the return of `_value`.
 * @param {Array<String>} a1__value
 * @param {function(<String>, Int)} _value
 * @returns {Object}
 */
export function _hash__value(a1__value:falsy|any[], _value:(any, number)=>any):any {
	const hash__value = {}
	if (a1__value) {
		for (let i = 0; i < a1__value.length; i++) {
			const value = a1__value[i]
			hash__value[value] = _value(value, i)
		}
	}
	return hash__value
}
/**
 * Returns a Function that returns from [_hash__value](#_hash__value).
 * @param {function(<String>, Int)} _value
 * @returns {function(Array<string>): Object}
 */
export function _fn__hash__value(_value:(any, number)=>any):(a1:falsy|any[])=>any {
	return a1__value=>_hash__value(a1__value, _value)
}
/**
 * Returns an `Object.<key,value>` of the given `hash__key[a1[][key]] = a1[]`.
 * @param {Array.<Object.<key,value>>}
 * @param {string} key
 * @returns {Object.<key,value>}
 */
export function _hash__key(a1:falsy|any[], key:string|number):any {
	const hash__key = {}
	if (a1) {
		for (let i = 0; i < a1.length; i++) {
			const item = a1[i]
			if (!item) continue
			hash__key[item[key]] = item
		}
	}
	return hash__key
}
/**
 * Returns a Function using argument `key` that returns value from [_hash__key](#_hash__key).
 * @param {string} key
 * @returns {function(Array): Object<key, value>}
 */
export function _fn__hash__key(key:string|number):(a1:falsy|any[])=>any {
	return a1=>_hash__key(a1, key)
}
/**
 * Returns a function that returns value of `_hash__item__idx` with `_item` argument.
 * @param {function(*, number)} [I] _item
 * @returns {function(function(*, number))}
 */
export function _fn__hash__item__idx(_item:(any, number)=>any):(a1:falsy|any[])=>any {
	return a1=>{
		let hash__item__idx = {}
		if (a1) {
			for (let idx = 0; idx < a1.length; idx++) {
				const item = _item ? _item(a1[idx], idx) : a1[idx]
				hash__item__idx[item] = idx
			}
		}
		return hash__item__idx
	}
}
/**
 * Returns an Object where each key is `_item(a1[idx], idx)` and value is `idx`.
 * @param {Array} a1
 * @returns {Object}
 */
export const _hash__item__idx = _fn__hash__item__idx(I__)
/**
 * Returns a Hash where each key is `a1[idx][key]` & value is `idx`.
 * @param {Array<Object>} a1
 * @param {string} key
 * @param {function(*, *, string, number)} _val
 * @returns {Object}
 */
export function _hash__key__idx(a1:falsy|any[], key:string|number, _val:_val__item_key_idx = I__):any {
	let hash__key__idx = {}
	if (a1) {
		for (let idx = 0; idx < a1.length; idx++) {
			const item = a1[idx]
			const val = _val ? _val(item && item[key], item, key, idx) : (item && item[key])
			if (!val) continue
			hash__key__idx[val] = idx
		}
	}
	return hash__key__idx
}
/**
 * Returns function that returns from [_hash__key__idx](#_hash__key__idx) with `_val` function argument.
 * @param {function(*, *, string, number)} _val
 * @returns {function(Array, string): Object}
 */
export function _fn__hash__key__idx(_val:_val__item_key_idx):(a1:falsy|any[], key:string)=>any {
	return (a1, key)=>_hash__key__idx(a1, key, _val)
}
/**
 * Returns a random index in `a1`.
 * @param {Array} a1
 * @returns {Int}
 */
export function _random_idx(a1:any[]):number {
	return Math.floor(Math.random() * a1.length)
}
export const idx__random = _random_idx
/**
 * Calls push on a1
 * @param {array} a1
 * @param {...number} arg_a1
 * @returns {[]|null}
 */
export function push(a1:falsy|any[], ...arg_a1:any):undefined|any[] {
	return a1 ? a1.push.apply(a1, arg_a1) : void 0
}
/**
 * Calls slice on a1
 * @param {array} a1
 * @param {...number} arg_a1
 * @returns {[]|null}
 */
export function slice(a1:falsy|any[], idx__begin?:number, idx__end?:number):undefined|any[] {
	return a1 ? a1.slice(idx__begin, idx__end) : void 0
}
/**
 * Calls splice on a1
 * @param {[]}a1
 * @param {...number}arg_a1
 * @returns {[]|null}
 */
export function splice(a1:falsy|any[], start:number, delete_count?:number, ...arg_a1:any):undefined|any[] {
	return a1 ? a1.splice(start, delete_count, ...arg_a1) : void 0
}
/**
 * Returns an Array from slicing an a1 from an a1's offset from position i
 * @param {Array} a1
 * @param {Int} i
 * @param {Int} offset
 * @returns {Array}
 */
export function slice__i__offset(a1:falsy|any[], i:number, offset = 1):undefined|any[] {
	return slice(a1, i * offset, (i + 1) * offset)
}
/**
 * Returns a `slice` function with the given `...arg_a1` that takes a Array `a1` as it's argument.
 * @param {...number} arg_a1
 * @returns {function(Array):(Array|null)}
 */
export function _slice(...arg_a1:any):(a1:falsy|any[])=>undefined|any[] {
	return a1=>slice(a1, ...arg_a1)
}
export const _fn__slice = _slice
/**
 * Returns a function that slices the spread argument array with `arg_a1`
 * @param {...number} arg_a1
 * @returns {function(...[*]): *[]}
 */
export function _slice__spread(...arg_a1:any):(...a1:any)=>undefined|any[] {
	return (...a1)=>slice(a1, ...arg_a1)
}
export const _fn__slice__spread = _slice__spread
/**
 * Returns offset index, i * offset
 * @param {Int} i
 * @param {Int} offset
 * @returns {Int}
 */
export function _i__offset(i:number, offset = 1):number {
	return i * offset
}
/**
 * Returns Index of the previous item, circular wrapping to the end (`length - 1`).
 * @param {Int} length
 * @param {Int} index
 * @returns {Int}
 */
export function _idx__prev(length:number, index = 0):number {
	return _idx__circular(length, index - 1)
}
export const _prev_idx = _idx__prev
/**
 * Returns Index of the next item, circular wrapping to the beginning (`0`).
 * @param {Int} length
 * @param {Int} index
 * @returns {Int}
 */
export function _idx__next(length:number, index = 0):number {
	return _idx__circular(length, index + 1)
}
export const _next_idx = _idx__next
/**
 * Returns `idx` % `length`.
 * @param {Int} length
 * @param {Int} idx
 * @returns {Int}
 */
export function _idx__circular(length:number, idx = 0):number {
	return ((length + (idx % length)) % length) || 0
}
export const _circular_idx = _idx__circular
/**
 * Iterate over each item in `a1` with `fn(a1[i], i)`.
 * @param {Array} a1
 * @param {function(*, Int)} fn
 * @returns {Array} a1
 */
export function each(a1:falsy|any[], fn:(any, number)=>any):undefined|any[] {
	if (!a1) return
	for (let i = 0; i < a1.length; i++) {
		fn(a1[i], i)
	}
	return a1
}
/**
 * Map return value of `fn(a1[], i)` into an Array.
 * @param {Array} a1
 * @param {function(*, number)} fn
 * @returns {Array}
 */
export function map(a1:falsy|any[], fn:(any, number)=>any):undefined|any[] {
	if (!a1) return
	const a1__out = []
	for (let i = 0; i < a1.length; i++) {
		a1__out.push(fn(a1[i], i))
	}
	return a1__out
}
/**
 * Returns Function returning [map](#map) with `fn`.
 * @param {function(*, number)} fn
 * @returns {function(Array)}
 */
export function _map(fn:(any, number)=>any):(a1:falsy|any[])=>undefined|any[] {
	return a1=>map(a1, fn)
}
export const _fn__map = _map
type fn__reduce = (memo:any, item:any, idx:number, a1:any[])=>any[]
/**
 * Returns reduced `memo` iterating over `a1` with `fn(memo, a1[], i, a1)`.
 * @param {Array} a1
 * @param {function(*, *, number, Array)} fn
 * @param memo
 * @returns {*} memo
 */
export function reduce(a1:falsy|any[], fn:fn__reduce, memo:any):undefined|any {
	if (!a1) return
	for (let i = 0; i < a1.length; i++) {
		const o = a1[i]
		memo = fn(memo, o, i, a1)
	}
	return memo
}
type _memo = (a1:any[])=>any
/**
 * Return Function that returns from `reduce` with `fn` and factory `_memo(a1)`.
 * @param {function(*, *, number, Array)} fn
 * @param {function(Array)} _memo - Returns a `memo` for [reduce](#reduce)
 * @returns {function(Array, *): *}
 */
export function _reduce(fn:fn__reduce, _memo:falsy|_memo):any {
	return (
		(a1, memo)=>
			reduce(
				a1,
				fn,
				memo == null
				? _memo && _memo(a1)
				: memo
			)
	)
}
export const _fn__reduce = _reduce
/**
 * Returns 2d Array of each item being the index value for each Array in `...a2__zipWith`.
 * @param {...Array} a2__zipWith
 * @returns {Array<Array>}
 */
export function zip(a2_nowrap:a2_nowrap_type):undefined|any[] {
	return zipWith(a2_nowrap, I)
}
/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `a2_nowrap_type`.
 * @param {*|Array<Array>} a2_nowrap
 * @param {function(Array, number)} fn
 * @returns {Array<Array>}
 */
export function zipWith(
	a2_nowrap:a2_nowrap_type,
	fn:(...any)=>any = ((..._)=>{})
):undefined|any[] {
	if (!a2_nowrap) return
	const a2 = _wrap_a2(a2_nowrap)
	const [a1 = [], ...a2__rest] = a2
	const zipWith_a1 = []
	for (let i = 0; i < a1.length; i++) {
		const arg_a1 = [a1[i]]
		for (let j = 0; j < a2__rest.length; j++) {
			arg_a1.push(a2__rest[j][i])
		}
		zipWith_a1.push(fn.call(zipWith_a1, arg_a1, i))
	}
	return zipWith_a1
}
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 * @param {function(Array, function)} fn
 * @returns {function(...[*]=): Array<Array>}
 */
export function _zipWith(fn:(...any)=>any):(...a2:any[])=>undefined|any[] {
	return (...a2)=>zipWith(a2, fn)
}
export const _fn__zipWith = _zipWith
/**
 * Returns a sparsely populated Array with `idx_a1` indices & `val_a1` values
 * @param {Array<number>} idx_a1 - Indices of returned Array.
 * @param {Array} val_a1 - Values of returned Array.
 * @returns {Array}
 */
export function _sparse_a1(idx_a1:number[], val_a1:any[]):any[] {
	const sparse_a1 = []
	for (let i = 0; i < idx_a1.length; i++) {
		const idx = idx_a1[i]
		sparse_a1[idx] = val_a1[i]
	}
	return sparse_a1
}
export const _a1__sparse = _sparse_a1
/**
 * Array of indices.
 * @typedef {Array<Int>} idx_a1
 */
/**
 * Array of values.
 * @typedef {Array<Int>} val_a1
 */
/**
 * `ctx` of values & indices.
 * @typedef {{
 *   idx_a1: idx_a1,
 *   val_a1: val_a1,
 * }} ctx__idx
 */
type compact_a1_ctx_type = {
	idx_a1:number[],
	val_a1:any[],
}
/**
 * Returns a [ctx__idx](#ctx__idx).
 * @param {Array} a1__sparse
 * @returns {ctx__idx}
 */
export function _compact_a1_ctx(a1__sparse:any[]):compact_a1_ctx_type {
	const idx_a1 = []
	const val_a1 = []
	for (let i = 0; i < a1__sparse.length; i++) {
		const val = a1__sparse[i]
		if (val != undefined) {
			idx_a1.push(i)
			val_a1.push(val)
		}
	}
	return {
		idx_a1,
		val_a1,
	}
}
/**
 * Returns a function that returns value from [_ctx__compact__a1__thold__entry](#_ctx__compact__a1__thold__entry)
 * @param {function(*, *): _eq} fn__eq
 * @returns {function(Array): ctx__idx}
 */
export function _fn__ctx__compact__a1__thold__entry(fn__eq = eq) {
	return a1__val__=>{
		const idx_a1 = []
		const val_a1 = []
		if (a1__val__) {
			for (let i = 0; i < a1__val__.length; i++) {
				const val = a1__val__[i]
				const val__prev = a1__val__[i - 1]
				if (!i || (fn__eq ? !fn__eq([val, val__prev]) : (val !== val__prev))) {
					idx_a1.push(i)
					val_a1.push(val)
				}
			}
		}
		return {
			idx_a1,
			val_a1,
		}
	}
}
/**
 * Returns a [ctx__idx](#ctx__idx) of presumably sorted items in `a1__val__` at each index of the new item for each changed item.
 * @param {Array} a1__val__
 * @returns {{ idx_a1, val_a1 }}
 */
export const _ctx__compact__a1__thold__entry = _fn__ctx__compact__a1__thold__entry()
/**
 * Returns a function that returns value from [_ctx__compact__a1__thold__exit](#_ctx__compact__a1__thold__exit)
 * @param {function(*, *): _eq} _eq
 * @returns {function(Array): ctx__idx}
 */
export function _fn__ctx__compact__a1__thold__exit(fn__eq = eq) {
	return a1__val__=>{
		const idx_a1 = []
		const val_a1 = []
		if (a1__val__) {
			const length__a1__val__ = a1__val__.length
			for (let idx = 0; idx < a1__val__.length; idx++) {
				const val = a1__val__[idx]
				const idx__next = idx + 1
				const val__next = a1__val__[idx__next]
				if (
					idx__next === length__a1__val__
					|| (
						fn__eq
						? !fn__eq([val, val__next])
						: val !== val__next
					)
				) {
					idx_a1.push(idx)
					val_a1.push(val)
				}
			}
		}
		return {
			idx_a1,
			val_a1,
		}
	}
}
/**
 * Returns a [ctx__idx](#ctx__idx) of presumably sorted items in `a1__val__` at each index of the old item for each changed item.
 * @param {Array} a1__val__
 * @param {function(*, *): eq} fn__eq
 * @returns {ctx__idx}
 */
export const _ctx__compact__a1__thold__exit = _fn__ctx__compact__a1__thold__exit()
/**
 * Returns an Object the key & value are set from the zipped `a1__0` & `a1__1` Array of `[key, value]` pairs.
 * @param {[[], []]} Array of 2 arrays to zip together
 * @returns {Object} Object of zipped key/value from items in 2d array
 */
export function _hash__zip__key__value([a1__0, a1__1]) {
	const hash__zip__key__value = {}
	const a2__key__value = zip([a1__0, a1__1])
	each(a2__key__value, ([key, value])=>hash__zip__key__value[key] = value)
	return hash__zip__key__value
}
/**
 * Returns Array where items in `a1` are filtered by `fn`.
 * @param {Array} a1
 * @param {function(*, Int)} _is_match
 * @returns {Array|null}
 */
export function filter(a1:falsy|any[], _is_match:_is_match):undefined|any[] {
	if (!a1) return
	const a1__out = []
	for (let i = 0; i < a1.length; i++) {
		const value = a1[i]
		if (_is_match(value, i)) {
			a1__out.push(value)
		}
	}
	return a1__out
}
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 * @param {function(*, Int)} _is_match
 * @returns {function(Array):(Array|null)}
 */
export function _filter(_is_match:_is_match) {
	return a1=>filter(a1, _is_match)
}
export const _fn__filter = _filter
/**
 * Returns Array of `idx` indices filtered by `fn`.
 * @param {Array} a1
 * @param {function(*, Int)} _is_match
 * @returns {Array|null}
 */
export function filter__idx(a1:falsy|any[], _is_match:_is_match=I__):undefined|any[] {
	if (!a1) return
	const idx_a1 = []
	for (let idx = 0; idx < a1.length; idx++) {
		const value = a1[idx]
		if (_is_match(value, idx)) {
			idx_a1.push(idx)
		}
	}
	return idx_a1
}
/**
 * Returns function that returns value from [filter__idx](#filter__idx) with `fn` argument.
 * @param {function(*, Int)} _is_match
 * @returns {function(Array):(Array|null)}
 */
export function _filter__idx(_is_match:_is_match=I__):(a1:falsy|any[])=>undefined|any[] {
	return a1=>filter__idx(a1, _is_match)
}
export const _fn__filter__idx = _filter__idx
/**
 * Returns Array of items not rejected by `fn`.
 * @param {Array} a1
 * @param {function(*, Int)} _is_match
 * @returns {Array|null}
 */
export function reject(a1, _is_match:_is_match):undefined|any[] {
	return filter(a1, (value, idx)=>!_is_match(value, idx))
}
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 * @param {function(*, Int)} _is_match
 * @returns {function(Array):(Array|null)}
 */
export function _reject(_is_match:_is_match):(a1:falsy|any[])=>undefined|any[] {
	return a1=>reject(a1, _is_match)
}
export const _fn__reject = _reject
/**
 * Returns Array of indices `idx` not rejected by `fn`.
 * @param {Array} a1
 * @param {function(*, Int)} fn
 * @returns {Array|null}
 */
export function reject__idx(a1:falsy|any[], fn:_is_match):undefined|any[] {
	if (!a1) return
	const a1__out = []
	for (let idx = 0; idx < a1.length; idx++) {
		const value = a1[idx]
		if (fn(value, idx)) {
			a1__out.push(idx)
		}
	}
	return a1__out
}
/**
 * Returns function that returns value from [reject__idx](#reject__idx) with `fn` argument.
 * @param {function(*, Int)} fn
 * @returns {function(Array):(Array|null)}
 */
export function _reject__idx(fn) {
	return a1=>reject__idx(a1, fn)
}
export const _fn__reject__idx = _reject__idx
/**
 * Returns first item in `a1` where `fn(a1[idx], idx)` is truthy.
 * @param {Array} a1
 * @param {function(*, Int)} fn
 * @returns {Array|null}
 */
export function find(a1:falsy|any[], fn:_is_match):undefined|any {
	if (!a1) return
	for (let idx = 0; idx < a1.length; idx++) {
		const val = a1[idx]
		const val__map = fn(val, idx)
		if (val__map) return val
	}
}
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 * @param {function(*, Int)} fn
 * @returns {function(Array): *}
 */
export function _find(fn) {
	return a1=>find(a1, fn)
}
/**
 * Returns first return value of `fn(a1[idx], idx)` where `fn(a1[idx], idx)` is truthy.
 * @param {Array} a1
 * @param {function(*, Int)} fn
 * @returns {*}
 */
export function find__map(a1:falsy|any[], fn:(any, number)=>falsy|any[]):undefined|any[] {
	if (!a1) return
	for (let idx = 0; idx < a1.length; idx++) {
		const value = a1[idx]
		const value__map = fn(value, idx)
		if (value__map) return value__map
	}
}
/**
 * Returns function that returns value from [find__map](#find__map) with `fn` argument.
 * @param {function(*, Int)} fn
 * @returns {function(Array): *}
 */
export function _find__map(fn) {
	return array=>find__map(array, fn)
}
/**
 * Returns idx of first match in `a1` with `compare`.
 * @param {Array} a1
 * @param {*|function(*, Int)} compare
 * @returns {Int}
 */
export function _idx(a1:falsy|any[], compare:any|_is_match):number {
	if (a1) {
		for (let idx = 0; idx < a1.length; idx++) {
			const value = a1[idx]
			if (
				value === compare
				|| (typeof compare === 'function' && compare(value, idx))
			) return idx
		}
	}
	return -1
}
/**
 * Returns Array of mapped `a1` with `_andand(...a1__attr)`.
 * @param {Array} a1
 * @param {...string} a1__attr
 * @returns {Array}
 */
export function map__andand(a1, ...a1__attr) {
	return map(a1, _andand(...a1__attr))
}
/**
 * Returns Array of mapped `a1` with `_andand_(...a1__attr)`
 * @param {Array} a1
 * @param {...string} a1__attr
 * @returns {Array}
 */
export function map__andand_(a1, ...a1__attr) {
	return map(a1, _andand_(...a1__attr))
}
export const map__andand__fn = map__andand_
/**
 * Returns function that returns value from [map__andand](#map__andand) with `...a1__attr`.
 * @param {...string} a1__attr
 * @returns {function(Array): Array}
 */
export function _map__andand(...a1__attr) {
	return a1=>map__andand(a1, ...a1__attr)
}
export const _fn__map__andand = _map__andand
/**
 * Returns function that returns value from [map__andand_](#map__andand_) with `...a1__attr`.
 * @param {...string} a1__attr
 * @returns {function(Array): Array}
 */
export function _map__andand_(...a1__attr) {
	return a1=>map__andand_(a1, ...a1__attr)
}
export const _fn__map__andand__fn = _map__andand_
/**
 * Returns Array of mapped `a1` with `_andand(...a1__attr)` or the return value of `fn__or`.
 * @param {Array} a1
 * @param {arg__andand} a1__attr
 * @param {fn__or} fn__or
 * @returns {Array}
 */
export function map__andand__or(a1, a1__attr, fn__or) {
	return map(a1, _andand__or(a1__attr, fn__or))
}
/**
 * Returns Array of inverse values (1/n) of each item in `a1`.
 * @param {Array<number>} a1
 * @returns {Array<number>}
 */
export function map__inverse(a1) {
	return map(a1, val=>val ? (1.0 / val) : 0)
}
/**
 * Returns Array of values from `a1` with index in `idx_a1`.
 * @param {Array<Int>} idx_a1
 * @param {Array} a1
 * @returns {Array}
 */
export function map__a1__idx__in__a1(idx_a1, a1) {
	return map(idx_a1, idx=>a1[idx])
}
/**
 * Returns 2d Array where `a1__source` is destructured into subarray of length `offset`.
 * @param {Array} a1__source
 * @param {Int} offset
 * @returns {*[]}
 */
export function _a2__destructure__offset(a1__source, offset = 1) {
	const a2__destructure__offset = []
	for (let i = 0; i < offset; i++) {
		a2__destructure__offset.push([])
	}
	for (let i = 0; i < a1__source.length; i++) {
		const val = a1__source[i]
		a2__destructure__offset[i % offset].push(val)
	}
	return a2__destructure__offset
}
/**
 * Returns Array of values `>= 0` in `val_a1`.
 * @param {number[]} val_a1
 * @returns {number[]}
 */
export function _a1__gte__0(val_a1) {
	const a1__gte__0 = []
	for (let i = 0; i < val_a1.length; i++) {
		const val = val_a1[i]
		if (val >= 0) {
			a1__gte__0.push(val)
		}
	}
	return a1__gte__0
}
/**
 * Returns Array of values `<= 0` in `val_a1`.
 * @param {number[]} val_a1
 * @returns {number[]}
 */
export function _a1__lte__0(val_a1) {
	const a1__lte__0 = []
	for (let i = 0; i < val_a1.length; i++) {
		const val = val_a1[i]
		if (val <= 0) {
			a1__lte__0.push(val)
		}
	}
	return a1__lte__0
}
/**
 * Returns Array of `obj[a1__key[]]`.
 * @param {Object} obj
 * @param {string[]} a1__key
 * @returns {*[]}
 */
export function _a1__val__from__a1__key(obj, a1__key) {
	if (!obj) return
	return map(a1__key, key=>obj[key])
}
