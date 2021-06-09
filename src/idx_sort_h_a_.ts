import { idx_sort_a_ } from './idx_sort_a_'
export function idx_sort_h_a_<Val extends unknown = unknown>(
  h_a:Record<string, Val[]>,
  idx_a:number[],
):Record<string, Val[]> {
  const idx_sort_h_a:Record<string, Val[]> = {}
  for (const key in h_a) {
    idx_sort_h_a[key] =
      idx_sort_a_<Val>(
        h_a[key],
        idx_a,
      )
  }
  return idx_sort_h_a
}
