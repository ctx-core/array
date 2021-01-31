/**
 * Returns an Object the key & value are set from the zipped `a1_0` & `a1_1` Array of `[key, value]` pairs.
 */
export declare function _value_key_zip_hash<K extends (string | number | symbol), V extends unknown>([a1_0, a1_1]: [K[], V[]]): Record<K, V>;
export { _value_key_zip_hash as _hash__zip__key__value, };
