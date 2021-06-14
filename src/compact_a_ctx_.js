/**
 * Returns a [compact_a_ctx_I](#compact_a_ctx_I)
 */
export function compact_a_ctx_(sparse_a) {
    const idx_a = [];
    const val_a = [];
    for (let i = 0; i < sparse_a.length; i++) {
        const val = sparse_a[i];
        if (val != undefined) {
            idx_a.push(i);
            val_a.push(val);
        }
    }
    return {
        idx_a,
        val_a,
    };
}
export { compact_a_ctx_ as compact_a1_ctx_fn, compact_a_ctx_ as _compact_a1_ctx, };
//# sourceMappingURL=src/compact_a_ctx_.js.map