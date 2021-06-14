/**
 * Returns 2d Array where `source_a` is destructured into subarray of length `offset`.
 */
export function offset_destructure_a2_(source_a, offset = 1) {
    const offset_destructure_a2 = [];
    for (let i = 0; i < offset; i++) {
        offset_destructure_a2.push([]);
    }
    for (let i = 0; i < source_a.length; i++) {
        const val = source_a[i];
        offset_destructure_a2[i % offset].push(val);
    }
    return offset_destructure_a2;
}
export { offset_destructure_a2_ as _offset_destructure_a2, offset_destructure_a2_ as _a2__destructure__offset, };
//# sourceMappingURL=src/offset_destructure_a2_.js.map