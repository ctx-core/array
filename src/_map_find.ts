import type { wrap_a_type } from '@ctx-core/function'
import { map_find } from './map_find';
/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 */
export function _map_find<In extends unknown = unknown, Out extends unknown = In>(
  fn:(val:In, idx:number)=>Out
) {
    return (a1:wrap_a_type<In>) => map_find(a1, fn);
}
export { _map_find as _find__map };
