import { idx_sort_a_ } from './idx_sort_a_.js'
export function idx_sort_r_a_<Val extends unknown = unknown>(
  a_r:Record<string, Val[]>,
  idx_a:number[],
):Record<string, Val[]> {
  const idx_sort_h_a:Record<string, Val[]> = {}
  for (const key in a_r) {
    idx_sort_h_a[key] =
      idx_sort_a_<Val>(
        a_r[key],
        idx_a,
      )
  }
  return idx_sort_h_a
}
export {
  idx_sort_r_a_ as idx_sort_h_a_
}
