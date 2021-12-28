import { zip_with_fn_T } from './zip_with.js'
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 */
export declare function zip_with_</*@formatter:off*/ I extends unknown[][] = unknown[][], O extends unknown[][] = I[number][number][][]>(fn: zip_with_fn_T<I[number], O[number]>): (...a2: I) => O | undefined;
export { zip_with_ as _zip_with, zip_with_ as _zipWith, zip_with_ as _fn__zipWith, };
