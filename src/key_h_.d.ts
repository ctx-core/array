/**
 * Returns an `Object.<key,value>` of the given `key_hash[a[][key]] = a[]`.
 */
export declare function key_h_</*@formatter:off*/ Key extends string, Obj extends {
    [k in Key]: string;
}>(a: Obj[], key: Key): Record<string, Obj>;
export declare function maybe_key_h_</*@formatter:off*/ Key extends string, Obj extends {
    [k in Key]: string;
}>(maybe_a: Obj[] | undefined, key: Key): Record<string, Obj>;
export { key_h_ as _key_hash, key_h_ as _hash__key, maybe_key_h_ as _maybe_key_hash, };
