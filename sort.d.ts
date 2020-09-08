import { falsy } from '@ctx-core/function';
import { compare_type } from './compare_type';
/**
 * Sort items in `a1` by the `compare` function
 */
export declare function sort(a1: falsy | any[], compare?: compare_type): undefined | any[];
