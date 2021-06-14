/**
 * Returns an `Object.<key,value>` of the given `key_hash[a[][key]] = a[]`.
 */
export function key_h_(a, key) {
    const key_hash = {};
    if (a) {
        for (let i = 0; i < a.length; i++) {
            const val = a[i];
            if (!val)
                continue;
            key_hash[val[key]] = val;
        }
    }
    return key_hash;
}
export function maybe_key_h_(maybe_a, key) {
    return key_h_(maybe_a, key);
}
export { key_h_ as _key_hash, key_h_ as _hash__key, maybe_key_h_ as _maybe_key_hash, };
//# sourceMappingURL=src/key_h_.js.map