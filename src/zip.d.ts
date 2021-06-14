/**
 * Returns 2d Array of each item being the index value for each Array in `...a2`.
 */
export declare function zip</*@formatter:off*/ I extends unknown[][] = unknown[][], O extends unknown[][] = I[number][number][][]>(a2: I): O;
export declare function maybe_zip</*@formatter:off*/ I extends unknown[][] = unknown[][], O extends unknown[][] = I[number][number][][]>(a2: I | undefined): O | undefined;
