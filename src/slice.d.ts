/**
 * Calls slice on a
 */
export declare function slice</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(a: I[], begin_idx?: number, end_idx?: number): O;
export declare function maybe_slice</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(maybe_a: I[] | undefined, begin_idx?: number, end_idx?: number): O | undefined;
