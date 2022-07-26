/**
 * Returns Function returning [map](#map) with `fn`.
 */
export function map_(fn) {
	return a=>a.map(fn)
}
export function maybe_map_(fn, or = null) {
	return a=>a ? a.map(fn) : or
}
export { map_ as _map, map_ as _fn__map, maybe_map_ as _maybe_map, }