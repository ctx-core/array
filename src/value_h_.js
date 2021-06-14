/**
 * Returns a Hash with a key for each item in `value_a` & value set to the return of `_value`.
 */
export function value_h_(in_key_a, _value) {
    const value_h = {};
    if (in_key_a) {
        const key_a = in_key_a;
        for (let i = 0; i < key_a.length; i++) {
            const key = key_a[i];
            value_h[key] = _value(key, i);
        }
    }
    return value_h;
}
export { value_h_ as value_hash_fn, value_h_ as _value_hash, value_h_ as _hash__value, };
//# sourceMappingURL=src/value_h_.js.map