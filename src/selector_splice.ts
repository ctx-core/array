/**
 * splice out any `array` elements matching `selector`
 */
export function selector_splice</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	a:I[], selector:(v:I, i:number, a:I[])=>I
):O {
	const index = a.findIndex(selector)
	if (index > -1) {
		a.splice(index, 1)
	}
	return a as O
}
export {
	selector_splice as splice__selector,
	selector_splice as splice__selector__a1,
}
