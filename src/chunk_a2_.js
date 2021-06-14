import { slice } from './slice';
/**
 * Splits array into chunks
 */
export function chunk_a2_(a, chunk_length) {
    let chunk_a2 = [];
    for (let i = 0; i < a.length; i += chunk_length) {
        chunk_a2.push(slice(a, i, i + chunk_length));
    }
    return chunk_a2;
}
export { chunk_a2_ as _a2__chunk, chunk_a2_ as _chunk_a2, chunk_a2_ as chunk_couple_fn, };
//# sourceMappingURL=src/chunk_a2_.js.map