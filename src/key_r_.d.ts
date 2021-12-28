/**
 * Returns an `Object.<key,value>` of the given `key_hash[a[][key]] = a[]`.
 */
export declare function key_r_</*@formatter:off*/ Key extends string, Obj extends {
    [k in Key]: string;
}>(a: Obj[], key: Key): Record<string, Obj>;
export declare function maybe_key_r_</*@formatter:off*/ Key extends string, Obj extends {
    [k in Key]: string;
}>(maybe_a: Obj[] | undefined, key: Key): Record<string, Obj>;
export { key_r_ as key_h_, key_r_ as _key_hash, key_r_ as _hash__key, maybe_key_r_ as maybe_key_h_, maybe_key_r_ as _maybe_key_hash, };
