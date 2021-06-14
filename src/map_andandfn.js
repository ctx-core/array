import { andandfn_ } from '@ctx-core/function';
import { map } from './map';
/**
 * Returns Array of mapped `a` with `andandfn_(...attr_a)`
 */
export function map_andandfn(a, ...attr_a) {
    return map(a, andandfn_(...attr_a));
}
export { map_andandfn as map__andand_, map_andandfn as map__andand__fn, };
//# sourceMappingURL=src/map_andandfn.js.map