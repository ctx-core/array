/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `wrap_aa_T`.
 */
export function zip_with</*@formatter:off*/
	I extends unknown[][] = unknown[][],
	O extends unknown[][] = I[number][number][][]
>/*@formatter:on*/(
	aa:I, fn?:zip_with_fn_T<I[number], O[number]>
):O {
	if (!fn) fn = default_zip_with_2<I[number], O>()
	const a = aa[0]
	const rest_aa = aa.slice(1)
	const zip_with_aa:O = [] as unknown as O
	for (let i = 0; i < a.length; i++) {
		const arg_a = [a[i]] as I[number]
		for (let j = 0; j < rest_aa.length; j++) {
			arg_a.push(
				rest_aa[j][i]
			)
		}
		zip_with_aa.push(
			fn.call(zip_with_aa, arg_a, i)
		)
	}
	return zip_with_aa
}
export function maybe_zip_with</*@formatter:off*/
	I extends unknown[][] = unknown[][],
	O extends unknown[][] = I[number][number][][]
>/*@formatter:on*/(
	a2:I,
	fn?:zip_with_fn_T<I[number], O[number]>
):O|undefined {
	if (!a2) return
	return zip_with<I, O>(a2, fn) as O
}
export function default_zip_with_2</*@formatter:off*/
	I extends unknown[] = unknown[],
	O extends unknown[] = I[number][]
>/*@formatter:on*/():zip_with_fn_T<I, O> {
	return (a, _i:number)=>(a as unknown as O)
}
export type zip_with_fn_T</*@formatter:off*/
	I extends unknown[] = unknown[],
	O extends unknown[] = I[number][]
>/*@formatter:on*/ =
	(a:I, i:number)=>O
export {
	zip_with as zipWith,
	maybe_zip_with as maybe_zipWith,
}
