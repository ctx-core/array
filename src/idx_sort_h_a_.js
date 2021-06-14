import { idx_sort_a_ } from './idx_sort_a_';
export function idx_sort_h_a_(h_a, idx_a) {
    const idx_sort_h_a = {};
    for (const key in h_a) {
        idx_sort_h_a[key] =
            idx_sort_a_(h_a[key], idx_a);
    }
    return idx_sort_h_a;
}
//# sourceMappingURL=src/idx_sort_h_a_.js.map