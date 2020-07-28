/**
 * @module @ctx-core/array/lib.js
 */
/**
 * ArrayLike object (ie arguments)
 * @property {integer} length
 * @typedef ArrayLike
 */
import { isArray } from '@ctx-core/object';
import { falsy, eq, concat, _wrap_a1 } from '@ctx-core/function';
export { isArray, concat, _wrap_a1 };
import { a2_nowrap_type } from './a2_nowrap_type';
declare type compare = (a: any, b: any) => number;
declare type compare__1 = (any: any, number?: any) => number;
declare type _is_match = (any: any, number?: any) => boolean;
declare type _val__item_key_idx = (val: any, item: any, string: any, number: any) => any;
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
export declare function spread(fn: (...any: any[]) => any, a1: any | any[]): any;
/**
 * Returns a function taking an array calling [spread](#spread)
 * @param {function} fn
 * @returns {function(*[]): *}
 */
export declare function _spread(fn: (...any: any[]) => any): (a1: any | any[]) => any;
/**
 * Returns `a2_nowrap_type` wrapped as a 2-dimensional array
 * @param {[]} a2_nowrap
 * @returns {*[][]}
 */
export declare function _wrap_a2(a2_nowrap: a2_nowrap_type): undefined | any[];
export declare const _a2__wrap: typeof _wrap_a2;
/**
 * Is a_a1 `===` b_a1? Checks first level equality.
 * @param {*[]} a1__a
 * @param {*[]} b_a1
 * @returns {Boolean}
 */
export declare function _eql_a1(a_a1: any[], b_a1: any[]): boolean;
export declare const _eql__a1: typeof _eql_a1;
/**
 * Is a_a1 `===` to b_a1 based on `fn(a, b, i)`? Checks first level equality.
 * @param {*[]} a_a1
 * @param {*[]} b_a1
 * @param {function(*, *, Int)} fn
 * @returns {Boolean}
 */
export declare function _eql_fn_a1(a_a1: any[], b_a1: any[], fn: (a: any, b: any, number: any) => unknown): boolean;
export declare const _eql__a1__fn: typeof _eql_fn_a1;
/**
 * Returns a hash of arrays grouped by each key in each `ctx` in `ctx_a1`.
 * @param {a1_nowrap} ctx_a1_nowrap
 * @returns {Object.<string, Array>}
 */
export declare function _a1_key_hash(ctx_a1_nowrap: any | any[]): any;
export declare const _hash__key__a1: typeof _a1_key_hash;
/**
 * Returns length of `a1`
 * @param {*[]|falsy} a1
 * @returns {Int|falsy}
 */
export declare function _a1_length(a1: any[]): undefined | number;
export declare const _length__a1: typeof _a1_length;
/**
 * Returns true if `a1` is has a length
 * @param {*[]|falsy} a1
 * @returns {boolean}
 */
export declare function _a1_present(a1: any | any[]): boolean;
export declare const _present__a1: typeof _a1_present;
export declare const concat__a1: typeof concat;
/**
 * Returns true if argument is an array with more than one item
 * @param {*[]|falsy} a1
 * @returns {boolean}
 */
export declare function _has_multiple(a1: any[]): boolean;
export declare const _has__multiple: typeof _has_multiple;
export declare const _has__multiple__a1: typeof _has_multiple;
/**
 * Array#`concat`, setting falsy values to an empty Array (`[]`).
 * @param {*[]} a1
 * @param {...*} rest_a1
 * @returns {*[]}
 */
export declare function concat_truthy_a1(a1: any | any[], ...rest_a1: any[]): any[];
export declare const concat__default__a1: typeof concat_truthy_a1;
export declare const concat__truthy: typeof concat_truthy_a1;
/**
 * Delegates to Array#indexOf
 * @param {*[]} a1
 * @param {string} key
 * @returns {Boolean}
 */
export declare function indexOf(a1: any[], key: string | number): number;
/**
 * Insert `...a1__item` into `a1` at position `idx`.
 * @param {*[]} a1
 * @param {Int} idx
 * @param {...[]} a1__item
 * @returns {Array}
 */
export declare function insert(a1: any[], idx: number, ...a1__item: any): any[];
/**
 * Remove `count = 1` items from `a1` at position `idx`.
 * @param {*[]} a1
 * @param {Int} idx
 * @param {Int} count
 * @returns {*[]}
 */
export declare function remove_idx(a1: any[], idx: number, count?: number): any[];
export declare const remove__idx: typeof remove_idx;
export declare const remove__index: typeof remove_idx;
/**
 * Remove each `...a1__item` from `a1`.
 * @param {*[]} a1
 * @param {...*} a1__item
 * @returns {*[]}
 */
export declare function remove(a1: falsy | any[], ...a1__item: any): undefined | any[];
export declare const remove__a1: typeof remove;
/**
 * Returns the first item in `a1`.
 * @param {*[]} a1
 * @returns {*|falsy}
 */
export declare function _first(a1: falsy | any[]): undefined | any;
/**
 * Returns the _last item in the a1
 * @param {*[]} a1
 * @returns {*|falsy} Last item in the a1
 */
export declare function _last(a1: falsy | any[]): undefined | any;
export declare const _last__a1: typeof _last;
/**
 * Splits array into chunks
 * @param {*[]} a1
 * @param {Int} chunk_length Length of each chunk
 * @returns {*[][]} The 2d array of chunks
 */
export declare function _chunk_a2(a1: any[], chunk_length: number): any[];
export declare const _a2__chunk: typeof _chunk_a2;
/**
 * Removes null values from the array
 * @param {*[]} a1
 * @returns {*[]} The array with null values removed
 */
export declare function compact(a1: falsy | any[]): undefined | any[];
export declare const compact_a1: typeof compact;
export declare const compact__a1: typeof compact;
/**
 * @typedef {function(*, Int, *[]): *} predicate
 */
/**
 * Returns true if every `predicate(value)` is truthy
 * @param {*[]} a1
 * @param {predicate} predicate - The every predicate function
 * @returns {Boolean} true if every `predicate(value)` is truthy
 */
export declare function every(a1: any[], predicate: (item: any, number: any, a1: any) => unknown): boolean;
export declare const every_a1: typeof every;
export declare const every__a1: typeof every;
/**
 * Returns a function that returns from [every](#every) with the given `predicate` function.
 * @param {predicate} predicate - The every predicate function
 * @returns {function(*[]): Boolean}
 */
export declare function _every(predicate: (any: any, number: any, a1: any) => unknown): (a1: any[]) => boolean;
export declare const _every_fn: typeof _every;
export declare const _fn__every: typeof _every;
/**
 * Returns true if some `predicate(value)` is truthy
 * @param {*[]} a1
 * @param {predicate} predicate - The some predicate function
 * @returns {Boolean} true if some `predicate(value)` is truthy
 */
export declare function some(a1: any[], predicate: (any: any, number: any, a1: any) => unknown): boolean;
export declare const some_a1: typeof some;
export declare const some__a1: typeof some;
/**
 * Returns a function that returns from [some](#some) with given `predicate` function.
 * @param {predicate} predicate - The some predicate function
 * @returns {function(*[]): Boolean}
 */
export declare function _some(predicate: (any: any, number: any, a1: any) => unknown): (a1: any[]) => boolean;
export declare const _some_fn: typeof _some;
export declare const _fn__some: typeof _some;
/**
 * Returns the _union of n arrays
 * @param {a2_nowrap_type} a2_nowrap - Performs the _union on the 2d array.
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export declare function _union(a2_nowrap: a2_nowrap_type): any[];
export declare const _union__a1: typeof _union;
export declare const _uniq: typeof _union;
export declare const _uniq__a1: typeof _union;
/**
 * Returns the _intersection of n arrays
 * @param {a2_nowrap_type} a2_nowrap - Performs the _intersection on the arrays.
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export declare function _intersection(a2_nowrap: a2_nowrap_type): any[];
export declare const _intersection__a1: typeof _intersection;
/**
 * Returns the _difference of n arrays
 * @param {a2_nowrap_type} a2_nowrap - Performs the _difference on the 2d Array.
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export declare function _difference(a2_nowrap: a2_nowrap_type): any[];
export declare const _difference__a1: typeof _difference;
/**
 * splice out any `array` elements matching `selector`
 * @param {*[]} a1
 * @param {function(*, Int, *[])} selector - truthy elements are spliced out
 * @returns {*[]}
 */
export declare function splice__selector(a1: any[], selector: (any: any, number: any, a1: any) => unknown): any[];
export declare const splice__selector__a1: typeof splice__selector;
/**
 * @typedef {function(*, *): Int|falsy} fn__compare
 */
/**
 * Sort items in `a1` by the `compare` function
 * @param {*[]} a1
 * @param {compare} compare
 * @returns {(Array|null|undefined)}
 */
export declare function sort(a1: falsy | any[], compare?: compare): undefined | any[];
/**
 * Reverses the order of items in `a1` by mutating `a1`.
 * @param {*[]} a1
 * @returns {*[]}
 */
export declare function reverse(a1: falsy | any[]): undefined | any[];
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 * @param {fn__compare} compare
 * @returns {function(*=): Array}
 */
export declare function _sort(compare?: compare): (a1: falsy | any[]) => undefined | any[];
export declare const _fn__sort: typeof _sort;
/**
 * Returns a basic ascending or descending `compare` function to be used for sorting.
 * @param {Boolean} [asc=true] ascending or descending
 * @returns {fn__compare} Function that compares two values
 */
export declare function _compare(asc?: boolean): compare;
export declare const _fn__compare: typeof _compare;
/**
 * Compare function to sort by ascending order.
 * @type {fn__compare}
 */
export declare const compare__asc: compare;
export declare const fn__compare__asc: compare;
/**
 * Compare function to sort by descending order.
 * @type {fn__compare}
 */
export declare const compare__desc: compare;
export declare const fn__compare__desc: compare;
/**
 * Return a compare function to sort on key values.
 * @param {string} key - Return function compares on `Object[key]`
 * @param {Boolean} [asc=true] ascending or descending
 * @returns {fn__compare} Function that compares two `value[key]`
 */
export declare function _key_compare(key: any, asc?: boolean): (a: any, b: any) => number;
export declare const _compare__key: typeof _key_compare;
export declare const _sort__key: typeof _key_compare;
export declare const _sort__key__a1: typeof _key_compare;
/**
 * Sorts a copy of `a1` by the `compare` function.
 * @param {*[]} a1
 * @param {fn__compare}
 * @returns {*[]}
 */
export declare function _a1__sort(a1: falsy | any[], compare?: compare): undefined | any[];
/**
 * Returns an Array of incrementing index (`idx`) values with `start=0`.
 * @param {Int} count
 * @param {Int} start=0
 * @returns {Int[]}
 */
export declare function _idx_a1(count: number, start?: number): any[];
export declare const _a1__idx: typeof _idx_a1;
/**
 * Returns an Array of indices inverted from `idx_a1`.
 * @param {Int[]} idx_a1
 * @returns {*[]|*}
 * @example `_invert_idx_a1([2, 1, 3, 0]) -> [3, 1, 0, 2]`
 */
export declare function _invert_idx_a1(idx_a1: falsy | number[]): undefined | any[];
export declare const _a1__idx__invert: typeof _invert_idx_a1;
export declare type ctx__idx__sort = {
    a1__idx__sort: number[];
    a1__val__sort: any[];
};
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
export declare function _ctx__idx__sort(a1: falsy | any[], compare?: compare): ctx__idx__sort;
declare type fn__a1__ctx__idx__sort = (a1: any[]) => ctx__idx__sort;
/**
 * Returns function that returns [_ctx__idx__sort](#_ctx__idx__sort).
 * @param {fn__compare} compare
 * @returns {function(*[]): ctx__idx__sort}
 */
export declare function _fn__ctx__idx__sort(compare?: compare): fn__a1__ctx__idx__sort;
/**
 * Returns an Array of sorted values from [ctx__idx__sort](#ctx__idx__sort).a1__val__sort
 * @param {ctx__idx__sort} ctx__idx__sort
 * @returns {*[]|falsy}
 */
export declare function _a1__val__sort(ctx__idx__sort: falsy | ctx__idx__sort): undefined | any[];
/**
 * Returns an Array of sorted indices from [ctx__idx__sort](#ctx__idx__sort).a1__idx__sort
 * @param {ctx__idx__sort} ctx__idx__sort
 * @returns {*[]|falsy}
 */
export declare function _a1__idx__sort(ctx__idx__sort: falsy | ctx__idx__sort): undefined | number[];
/**
 * Sort `val_a1` by an array of indices in `a1__idx__sort`.
 * @param {*[]} val_a1
 * @param {Int[]} a1__idx__sort
 * @returns {Array}
 */
export declare function _a1__sort__idx(val_a1: falsy | any[], a1__idx__sort: falsy | number[]): undefined | number[];
/**
 * Returns [ctx__idx__sort](#ctx__idx__sort) derived from `val_a1` sorted by `a1__idx__sort`.
 * @param {Array} val_a1
 * @param {Array<Int>} a1__idx__sort
 * @returns {ctx__idx__sort}
 */
export declare function _ctx__idx__sort__a1__sort__idx(val_a1: any[], a1__idx__sort: number[]): ctx__idx__sort;
/**
 * Returns the rank of the items where the compare function === 0
 * @param {Array} a1
 * @param {Function} compare__1 - rank compare function
 * @returns {integer} the rank of the items where the compare function === 0
 */
export declare function rank(a1: any[], compare__1: compare__1): number;
export declare const rank__a1: typeof rank;
/**
 * Returns the rank of the item where the compare function === 0, using binarySort
 * @param {Array} a1
 * @param {Function} compare__1 - rank compare function
 * @returns {integer} the rank of the items where the compare function === 0
 */
export declare function rank__binarySort(a1: any[], compare__1: compare__1): number;
export declare const rank__binarySort__a1: typeof rank__binarySort;
/**
 * Returns an array sorted by `item.name`
 * @param {Array} a1
 * @returns {Array.<*>} array sorted by `item.name`
 */
export declare function sort__name(a1: any[]): any[];
export declare const sort__name__a1: typeof sort__name;
/**
 * Returns a Hash with a key for each item in `a1__value` & value set to the return of `_value`.
 * @param {Array<String>} a1__value
 * @param {function(<String>, Int)} _value
 * @returns {Object}
 */
export declare function _hash__value(a1__value: falsy | any[], _value: (any: any, number: any) => any): any;
/**
 * Returns a Function that returns from [_hash__value](#_hash__value).
 * @param {function(<String>, Int)} _value
 * @returns {function(Array<string>): Object}
 */
export declare function _fn__hash__value(_value: (any: any, number: any) => any): (a1: falsy | any[]) => any;
/**
 * Returns an `Object.<key,value>` of the given `hash__key[a1[][key]] = a1[]`.
 * @param {Array.<Object.<key,value>>}
 * @param {string} key
 * @returns {Object.<key,value>}
 */
export declare function _hash__key(a1: falsy | any[], key: string | number): any;
/**
 * Returns a Function using argument `key` that returns value from [_hash__key](#_hash__key).
 * @param {string} key
 * @returns {function(Array): Object<key, value>}
 */
export declare function _fn__hash__key(key: string | number): (a1: falsy | any[]) => any;
/**
 * Returns a function that returns value of `_hash__item__idx` with `_item` argument.
 * @param {function(*, number)} [I] _item
 * @returns {function(function(*, number))}
 */
export declare function _fn__hash__item__idx(_item: (any: any, number: any) => any): (a1: falsy | any[]) => any;
/**
 * Returns an Object where each key is `_item(a1[idx], idx)` and value is `idx`.
 * @param {Array} a1
 * @returns {Object}
 */
export declare const _hash__item__idx: (a1: falsy | any[]) => any;
/**
 * Returns a Hash where each key is `a1[idx][key]` & value is `idx`.
 * @param {Array<Object>} a1
 * @param {string} key
 * @param {function(*, *, string, number)} _val
 * @returns {Object}
 */
export declare function _hash__key__idx(a1: falsy | any[], key: string | number, _val?: _val__item_key_idx): any;
/**
 * Returns function that returns from [_hash__key__idx](#_hash__key__idx) with `_val` function argument.
 * @param {function(*, *, string, number)} _val
 * @returns {function(Array, string): Object}
 */
export declare function _fn__hash__key__idx(_val: _val__item_key_idx): (a1: falsy | any[], key: string) => any;
/**
 * Returns a random index in `a1`.
 * @param {Array} a1
 * @returns {Int}
 */
export declare function _random_idx(a1: any[]): number;
export declare const idx__random: typeof _random_idx;
/**
 * Calls push on a1
 * @param {array} a1
 * @param {...number} arg_a1
 * @returns {[]|null}
 */
export declare function push(a1: falsy | any[], ...arg_a1: any): undefined | any[];
/**
 * Calls slice on a1
 * @param {array} a1
 * @param {...number} arg_a1
 * @returns {[]|null}
 */
export declare function slice(a1: falsy | any[], idx__begin?: number, idx__end?: number): undefined | any[];
/**
 * Calls splice on a1
 * @param {[]}a1
 * @param {...number}arg_a1
 * @returns {[]|null}
 */
export declare function splice(a1: falsy | any[], start: number, delete_count?: number, ...arg_a1: any): undefined | any[];
/**
 * Returns an Array from slicing an a1 from an a1's offset from position i
 * @param {Array} a1
 * @param {Int} i
 * @param {Int} offset
 * @returns {Array}
 */
export declare function slice__i__offset(a1: falsy | any[], i: number, offset?: number): undefined | any[];
/**
 * Returns a `slice` function with the given `...arg_a1` that takes a Array `a1` as it's argument.
 * @param {...number} arg_a1
 * @returns {function(Array):(Array|null)}
 */
export declare function _slice(...arg_a1: any): (a1: falsy | any[]) => undefined | any[];
export declare const _fn__slice: typeof _slice;
/**
 * Returns a function that slices the spread argument array with `arg_a1`
 * @param {...number} arg_a1
 * @returns {function(...[*]): *[]}
 */
export declare function _slice__spread(...arg_a1: any): (...a1: any) => undefined | any[];
export declare const _fn__slice__spread: typeof _slice__spread;
/**
 * Returns offset index, i * offset
 * @param {Int} i
 * @param {Int} offset
 * @returns {Int}
 */
export declare function _i__offset(i: number, offset?: number): number;
/**
 * Returns Index of the previous item, circular wrapping to the end (`length - 1`).
 * @param {Int} length
 * @param {Int} index
 * @returns {Int}
 */
export declare function _idx__prev(length: number, index?: number): number;
export declare const _prev_idx: typeof _idx__prev;
/**
 * Returns Index of the next item, circular wrapping to the beginning (`0`).
 * @param {Int} length
 * @param {Int} index
 * @returns {Int}
 */
export declare function _idx__next(length: number, index?: number): number;
export declare const _next_idx: typeof _idx__next;
/**
 * Returns `idx` % `length`.
 * @param {Int} length
 * @param {Int} idx
 * @returns {Int}
 */
export declare function _idx__circular(length: number, idx?: number): number;
export declare const _circular_idx: typeof _idx__circular;
/**
 * Iterate over each item in `a1` with `fn(a1[i], i)`.
 * @param {Array} a1
 * @param {function(*, Int)} fn
 * @returns {Array} a1
 */
export declare function each(a1: falsy | any[], fn: (any: any, number: any) => any): undefined | any[];
/**
 * Map return value of `fn(a1[], i)` into an Array.
 * @param {Array} a1
 * @param {function(*, number)} fn
 * @returns {Array}
 */
export declare function map(a1: falsy | any[], fn: (any: any, number: any) => any): undefined | any[];
/**
 * Returns Function returning [map](#map) with `fn`.
 * @param {function(*, number)} fn
 * @returns {function(Array)}
 */
export declare function _map(fn: (any: any, number: any) => any): (a1: falsy | any[]) => undefined | any[];
export declare const _fn__map: typeof _map;
declare type fn__reduce = (memo: any, item: any, idx: number, a1: any[]) => any[];
/**
 * Returns reduced `memo` iterating over `a1` with `fn(memo, a1[], i, a1)`.
 * @param {Array} a1
 * @param {function(*, *, number, Array)} fn
 * @param memo
 * @returns {*} memo
 */
export declare function reduce(a1: falsy | any[], fn: fn__reduce, memo: any): undefined | any;
declare type _memo = (a1: any[]) => any;
/**
 * Return Function that returns from `reduce` with `fn` and factory `_memo(a1)`.
 * @param {function(*, *, number, Array)} fn
 * @param {function(Array)} _memo - Returns a `memo` for [reduce](#reduce)
 * @returns {function(Array, *): *}
 */
export declare function _reduce(fn: fn__reduce, _memo: falsy | _memo): any;
export declare const _fn__reduce: typeof _reduce;
/**
 * Returns 2d Array of each item being the index value for each Array in `...a2__zipWith`.
 * @param {...Array} a2__zipWith
 * @returns {Array<Array>}
 */
export declare function zip(a2_nowrap: a2_nowrap_type): undefined | any[];
/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `a2_nowrap_type`.
 * @param {*|Array<Array>} a2_nowrap
 * @param {function(Array, number)} fn
 * @returns {Array<Array>}
 */
export declare function zipWith(a2_nowrap: a2_nowrap_type, fn?: (...any: any[]) => any): undefined | any[];
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 * @param {function(Array, function)} fn
 * @returns {function(...[*]=): Array<Array>}
 */
export declare function _zipWith(fn: (...any: any[]) => any): (...a2: any[]) => undefined | any[];
export declare const _fn__zipWith: typeof _zipWith;
/**
 * Returns a sparsely populated Array with `idx_a1` indices & `val_a1` values
 * @param {Array<number>} idx_a1 - Indices of returned Array.
 * @param {Array} val_a1 - Values of returned Array.
 * @returns {Array}
 */
export declare function _sparse_a1(idx_a1: number[], val_a1: any[]): any[];
export declare const _a1__sparse: typeof _sparse_a1;
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
declare type compact_a1_ctx_type = {
    idx_a1: number[];
    val_a1: any[];
};
/**
 * Returns a [ctx__idx](#ctx__idx).
 * @param {Array} a1__sparse
 * @returns {ctx__idx}
 */
export declare function _compact_a1_ctx(a1__sparse: any[]): compact_a1_ctx_type;
/**
 * Returns a function that returns value from [_ctx__compact__a1__thold__entry](#_ctx__compact__a1__thold__entry)
 * @param {function(*, *): _eq} fn__eq
 * @returns {function(Array): ctx__idx}
 */
export declare function _fn__ctx__compact__a1__thold__entry(fn__eq?: typeof eq): (a1__val__: any) => {
    idx_a1: any[];
    val_a1: any[];
};
/**
 * Returns a [ctx__idx](#ctx__idx) of presumably sorted items in `a1__val__` at each index of the new item for each changed item.
 * @param {Array} a1__val__
 * @returns {{ idx_a1, val_a1 }}
 */
export declare const _ctx__compact__a1__thold__entry: (a1__val__: any) => {
    idx_a1: any[];
    val_a1: any[];
};
/**
 * Returns a function that returns value from [_ctx__compact__a1__thold__exit](#_ctx__compact__a1__thold__exit)
 * @param {function(*, *): _eq} _eq
 * @returns {function(Array): ctx__idx}
 */
export declare function _fn__ctx__compact__a1__thold__exit(fn__eq?: typeof eq): (a1__val__: any) => {
    idx_a1: any[];
    val_a1: any[];
};
/**
 * Returns a [ctx__idx](#ctx__idx) of presumably sorted items in `a1__val__` at each index of the old item for each changed item.
 * @param {Array} a1__val__
 * @param {function(*, *): eq} fn__eq
 * @returns {ctx__idx}
 */
export declare const _ctx__compact__a1__thold__exit: (a1__val__: any) => {
    idx_a1: any[];
    val_a1: any[];
};
/**
 * Returns an Object the key & value are set from the zipped `a1__0` & `a1__1` Array of `[key, value]` pairs.
 * @param {[[], []]} Array of 2 arrays to zip together
 * @returns {Object} Object of zipped key/value from items in 2d array
 */
export declare function _hash__zip__key__value([a1__0, a1__1]: [any, any]): {};
/**
 * Returns Array where items in `a1` are filtered by `fn`.
 * @param {Array} a1
 * @param {function(*, Int)} _is_match
 * @returns {Array|null}
 */
export declare function filter(a1: falsy | any[], _is_match: _is_match): undefined | any[];
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 * @param {function(*, Int)} _is_match
 * @returns {function(Array):(Array|null)}
 */
export declare function _filter(_is_match: _is_match): (a1: any) => any[];
export declare const _fn__filter: typeof _filter;
/**
 * Returns Array of `idx` indices filtered by `fn`.
 * @param {Array} a1
 * @param {function(*, Int)} _is_match
 * @returns {Array|null}
 */
export declare function filter__idx(a1: falsy | any[], _is_match?: _is_match): undefined | any[];
/**
 * Returns function that returns value from [filter__idx](#filter__idx) with `fn` argument.
 * @param {function(*, Int)} _is_match
 * @returns {function(Array):(Array|null)}
 */
export declare function _filter__idx(_is_match?: _is_match): (a1: falsy | any[]) => undefined | any[];
export declare const _fn__filter__idx: typeof _filter__idx;
/**
 * Returns Array of items not rejected by `fn`.
 * @param {Array} a1
 * @param {function(*, Int)} _is_match
 * @returns {Array|null}
 */
export declare function reject(a1: any, _is_match: _is_match): undefined | any[];
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 * @param {function(*, Int)} _is_match
 * @returns {function(Array):(Array|null)}
 */
export declare function _reject(_is_match: _is_match): (a1: falsy | any[]) => undefined | any[];
export declare const _fn__reject: typeof _reject;
/**
 * Returns Array of indices `idx` not rejected by `fn`.
 * @param {Array} a1
 * @param {function(*, Int)} fn
 * @returns {Array|null}
 */
export declare function reject__idx(a1: falsy | any[], fn: _is_match): undefined | any[];
/**
 * Returns function that returns value from [reject__idx](#reject__idx) with `fn` argument.
 * @param {function(*, Int)} fn
 * @returns {function(Array):(Array|null)}
 */
export declare function _reject__idx(fn: any): (a1: any) => any[];
export declare const _fn__reject__idx: typeof _reject__idx;
/**
 * Returns first item in `a1` where `fn(a1[idx], idx)` is truthy.
 * @param {Array} a1
 * @param {function(*, Int)} fn
 * @returns {Array|null}
 */
export declare function find(a1: falsy | any[], fn: _is_match): undefined | any;
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 * @param {function(*, Int)} fn
 * @returns {function(Array): *}
 */
export declare function _find(fn: any): (a1: any) => any;
/**
 * Returns first return value of `fn(a1[idx], idx)` where `fn(a1[idx], idx)` is truthy.
 * @param {Array} a1
 * @param {function(*, Int)} fn
 * @returns {*}
 */
export declare function find__map(a1: falsy | any[], fn: (any: any, number: any) => falsy | any[]): undefined | any[];
/**
 * Returns function that returns value from [find__map](#find__map) with `fn` argument.
 * @param {function(*, Int)} fn
 * @returns {function(Array): *}
 */
export declare function _find__map(fn: any): (array: any) => any[];
/**
 * Returns idx of first match in `a1` with `compare`.
 * @param {Array} a1
 * @param {*|function(*, Int)} compare
 * @returns {Int}
 */
export declare function _idx(a1: falsy | any[], compare: any | _is_match): number;
/**
 * Returns Array of mapped `a1` with `_andand(...a1__attr)`.
 * @param {Array} a1
 * @param {...string} a1__attr
 * @returns {Array}
 */
export declare function map__andand(a1: any, ...a1__attr: any[]): any[];
/**
 * Returns Array of mapped `a1` with `_andand_(...a1__attr)`
 * @param {Array} a1
 * @param {...string} a1__attr
 * @returns {Array}
 */
export declare function map__andand_(a1: any, ...a1__attr: any[]): any[];
export declare const map__andand__fn: typeof map__andand_;
/**
 * Returns function that returns value from [map__andand](#map__andand) with `...a1__attr`.
 * @param {...string} a1__attr
 * @returns {function(Array): Array}
 */
export declare function _map__andand(...a1__attr: any[]): (a1: any) => any[];
export declare const _fn__map__andand: typeof _map__andand;
/**
 * Returns function that returns value from [map__andand_](#map__andand_) with `...a1__attr`.
 * @param {...string} a1__attr
 * @returns {function(Array): Array}
 */
export declare function _map__andand_(...a1__attr: any[]): (a1: any) => any[];
export declare const _fn__map__andand__fn: typeof _map__andand_;
/**
 * Returns Array of mapped `a1` with `_andand(...a1__attr)` or the return value of `fn__or`.
 * @param {Array} a1
 * @param {arg__andand} a1__attr
 * @param {fn__or} fn__or
 * @returns {Array}
 */
export declare function map__andand__or(a1: any, a1__attr: any, fn__or: any): any[];
/**
 * Returns Array of inverse values (1/n) of each item in `a1`.
 * @param {Array<number>} a1
 * @returns {Array<number>}
 */
export declare function map__inverse(a1: any): any[];
/**
 * Returns Array of values from `a1` with index in `idx_a1`.
 * @param {Array<Int>} idx_a1
 * @param {Array} a1
 * @returns {Array}
 */
export declare function map__a1__idx__in__a1(idx_a1: any, a1: any): any[];
/**
 * Returns 2d Array where `a1__source` is destructured into subarray of length `offset`.
 * @param {Array} a1__source
 * @param {Int} offset
 * @returns {*[]}
 */
export declare function _a2__destructure__offset(a1__source: any, offset?: number): any[];
/**
 * Returns Array of values `>= 0` in `val_a1`.
 * @param {number[]} val_a1
 * @returns {number[]}
 */
export declare function _a1__gte__0(val_a1: any): any[];
/**
 * Returns Array of values `<= 0` in `val_a1`.
 * @param {number[]} val_a1
 * @returns {number[]}
 */
export declare function _a1__lte__0(val_a1: any): any[];
/**
 * Returns Array of `obj[a1__key[]]`.
 * @param {Object} obj
 * @param {string[]} a1__key
 * @returns {*[]}
 */
export declare function _a1__val__from__a1__key(obj: any, a1__key: any): any[];
