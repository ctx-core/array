import { zip_with_fn_T } from './zip_with.js'
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 */
export declare function zip_with_</*@formatter:off*/
	I extends readonly unknown[][] = readonly unknown[][], 
	O extends readonly unknown[][] = readonly I[number][number][][]
/*@formatter:on*/>(fn: zip_with_fn_T<I[number], O[number]>): (...a2: I) => O | undefined;
export { zip_with_ as _zip_with, zip_with_ as _zipWith, zip_with_ as _fn__zipWith, };
