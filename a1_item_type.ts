// See https://dev.to/aexol/typescript-tutorial-infer-keyword-2cn - FlattenIfArray
export type a1_item_type<I> = I extends (infer O)[] ? O : I
