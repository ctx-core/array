/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `wrap_a2_T`.
 */
export function zip_with(a2, fn) {
    if (!fn)
        fn = default_zip_with_2();
    const a = a2[0];
    const rest_a2 = a2.slice(1);
    const zip_with_a2 = [];
    for (let i = 0; i < a.length; i++) {
        const arg_a = [a[i]];
        for (let j = 0; j < rest_a2.length; j++) {
            arg_a.push(rest_a2[j][i]);
        }
        zip_with_a2.push(fn.call(zip_with_a2, arg_a, i));
    }
    return zip_with_a2;
}
export function maybe_zip_with(a2, fn) {
    if (!a2)
        return;
    return zip_with(a2, fn);
}
export function default_zip_with_2() {
    return (a, _i) => a;
}
export { zip_with as zipWith, maybe_zip_with as maybe_zipWith, };
//# sourceMappingURL=src/zip_with.js.map