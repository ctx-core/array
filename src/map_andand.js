import { _andand, andand } from '@ctx-core/function'
import { map, maybe_map } from './map.js'
/**
 * Returns Array of mapped `a` with `_andand(...name_a)`.
 */ export function map_andand(a, ...name_a) {
	return map(a, (item)=>andand(item, ...name_a)
	)
}
export function maybe_map_andand(a, ...name_a) {
	return maybe_map(a, _andand(...name_a))
}
export { map_andand as map__andand, }
