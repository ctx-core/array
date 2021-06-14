import { map } from './map';
/**
 * Returns Array of inverse values (1/n) of each item in `a`.
 */
export function map_inverse(a) {
    return map(a, val => val ? (1.0 / val) : 0);
}
export { map_inverse as map__inverse, };
//# sourceMappingURL=src/map_inverse.js.map