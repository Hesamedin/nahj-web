/**
 * @Author:             Hesam
 * @Date:               Apr 12 2018
 * @Filename:           nj_types.ts
 * @Copyright: Copyright (c) Kian Mobilesoft Ltd. All rights reserved.
 */
import { Action as ReduxAction } from 'redux';

/**
 * An *action* is a plain object that represents an intention to change the
 * state. Actions are the only way to get data into the store. Any data,
 * whether from UI events, network callbacks, or other sources such as
 * WebSockets needs to eventually be dispatched as actions.
 *
 * Actions must have a `type` field that indicates the type of action being
 * performed. Types can be defined as constants and imported from another
 * module. It’s better to use strings for `type` than Symbols because strings
 * are serializable.
 *
 * @export
 * @interface Action
 * @template T String literal to identify type of action.
 * @template Payload Action payload type.
 */
export interface Action<T extends string, Payload> extends ReduxAction {
    type: T;
    payload: Payload;
}
