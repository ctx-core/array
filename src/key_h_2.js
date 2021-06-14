import { key_h_, maybe_key_h_ } from './key_h_';
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export function key_h_2(key) {
    return a => key_h_(a, key);
}
export function maybe_key_h_2(key) {
    return maybe_a => maybe_key_h_(maybe_a, key);
}
export { key_h_2 as _key_hash_fn, key_h_2 as _fn__hash__key, maybe_key_h_2 as _maybe_key_hash_fn, };
//# sourceMappingURL=src/key_h_2.js.map