/**
 * Returns Function returning [map](#map) with `fn`.
 * @param fn{(val:unknown, idx:number)=>unknown}
 * @returns {(a:unknown[])=>unknown[]}
 */
export function map_(fn) {
	return a=>a.map(fn)
}
/**
 * @param fn{(val:unknown, idx:number)=>unknown}
 * @param or{unknown[]|null|undefined}
 * @returns {(a:unknown[]|undefined)=>unknown[]|null|undefined}
 */
export function maybe_map_(fn, or = null) {
	return a=>a ? a.map(fn) : or
}
export {
	map_ as _map,
	map_ as _fn__map,
	maybe_map_ as _maybe_map,
}
