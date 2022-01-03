import { map, maybe_map } from './map.js'
/**
 * Returns Function returning [map](#map) with `fn`.
 */ export function map_(fn) {
	return (a)=>map(a, fn)

}
export function maybe_map_(fn) {
	return (a)=>maybe_map(a, fn)

}
export { map_ as _map, map_ as _fn__map, maybe_map_ as _maybe_map, }
