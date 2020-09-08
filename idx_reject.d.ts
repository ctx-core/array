import { falsy } from '@ctx-core/function';
import { _is_match_type } from './_is_match_type';
/**
 * Returns Array of indices `idx` not rejected by `fn`.
 */
export declare function idx_reject(a1: falsy | any[], fn: _is_match_type): undefined | any[];
export declare const reject__idx: typeof idx_reject;
