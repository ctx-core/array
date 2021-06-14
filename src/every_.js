import { every } from './every';
/**
 * Returns a function that returns from [every](#every) with the given `predicate` function.
 */
export function every_(predicate) {
    return (a) => every(a, predicate);
}
export { every_ as _every, every_ as _every_fn, every_ as _fn__every, };
//# sourceMappingURL=src/every_.js.map