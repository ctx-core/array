/**
 * splice out any `array` elements matching `selector`
 */
export function selector_splice</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	a1:I[], selector:(v:I, i:number, a1:I[])=>I
):O {
	const index = a1.findIndex(selector)
	if (index > -1) {
		a1.splice(index, 1)
	}
	return a1 as O
}
export {
	selector_splice as splice__selector,
	selector_splice as splice__selector__a1,
}
