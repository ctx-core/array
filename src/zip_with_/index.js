import { zip_with } from '../zip_with/index.js'
/** @typedef {import('../zip_with').zip_with_fn_T}zip_with_fn_T */
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 * @param fn{zip_with_fn_T}
 * @returns {(...a2:unknown[][])=>unknown[][|undefined]}
 */
export function zip_with_(fn) {
	return (...a2)=>zip_with(a2, fn)
}
export {
	zip_with_ as _zip_with,
	zip_with_ as _zipWith,
	zip_with_ as _fn__zipWith,
}
