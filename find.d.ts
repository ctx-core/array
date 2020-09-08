import { falsy } from '@ctx-core/function';
import { _is_match_type } from './_is_match_type';
/**
 * Returns first item in `a1` where `fn(a1[idx], idx)` is truthy.
 */
export declare function find(a1: falsy | any[], fn: _is_match_type): undefined | any;
