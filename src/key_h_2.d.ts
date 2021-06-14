/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export declare function key_h_2</*@formatter:off*/ Key extends string, Obj extends {
    [k in Key]: string;
}>(key: Key): (a: Obj[]) => Record<string, Obj>;
export declare function maybe_key_h_2</*@formatter:off*/ Key extends string, Obj extends {
    [k in Key]: string;
}>(key: Key): (maybe_a: Obj[] | undefined) => Record<string, Obj>;
export { key_h_2 as _key_hash_fn, key_h_2 as _fn__hash__key, maybe_key_h_2 as _maybe_key_hash_fn, };
