/**
 * Calls splice on a
 */
export declare function splice</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(a: I[], start: number, delete_count?: number, ...arg_a: I[]): O;
export declare function maybe_splice</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(maybe_a: I[] | undefined, start: number, delete_count?: number, ...arg_a: I[]): O | undefined;
