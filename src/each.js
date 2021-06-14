/**
 * Iterate over each item in `a` with `fn(a[i], i)`.
 */
export function each(a, fn) {
    for (let i = 0; i < a.length; i++) {
        fn(a[i], i);
    }
    return a;
}
export function maybe_each(maybe_a, fn) {
    if (!maybe_a)
        return;
    return each(maybe_a, fn);
}
//# sourceMappingURL=src/each.js.map