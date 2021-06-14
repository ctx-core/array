/**
 * Returns an Array from slicing an a from an a's offset from position i
 */
export declare function offset_i_slice<I extends unknown = unknown>(a: I[], i: number, offset?: number): I[];
export declare function maybe_offset_i_slice<I extends unknown = unknown>(maybe_a: I[] | undefined, i: number, offset?: number): I[] | undefined;
export { offset_i_slice as slice__i__offset, };
