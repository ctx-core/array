import { zip_with } from './zip_with.js'
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 */
export function zip_with_(fn) {
	return (...a2)=>zip_with(a2, fn)
}
export { zip_with_ as _zip_with, zip_with_ as _zipWith, zip_with_ as _fn__zipWith, }
