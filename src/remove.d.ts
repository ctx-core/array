/**
 * Remove each `...item_a` from `a`.
 */
export declare function remove</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(a: I[], ...item_a: I[]): O;
export declare function maybe_remove</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(maybe_a: I[] | undefined, ...item_a: I[]): O | undefined;
export { remove as remove__a1, };
