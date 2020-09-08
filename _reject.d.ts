import { falsy } from '@ctx-core/function';
import { _is_match_type } from './_is_match_type';
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export declare function _reject(_is_match: _is_match_type): (a1: falsy | any[]) => undefined | any[];
export declare const _fn__reject: typeof _reject;
