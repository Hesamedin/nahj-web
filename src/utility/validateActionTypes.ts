/**
 * @Author:             Hesam
 * @Date:               Apr 12 2018
 * @Filename:           validateActionTypes.ts
 * @Copyright: Copyright (c) Kian Mobilesoft Ltd. All rights reserved.
 */

import { Reducer, ReducersMapObject } from 'redux';
import { difference } from 'ramda';
import { logger } from './logger';

// Watch all names to see if we've seen it before
let actionNames: { [key: string]: string } = {};

const __DEV__ = process.env.NODE_ENV === 'development';

/**
 * Redux action names use a single namespace, so there is a non zero chance we end up reusing the same
 * name for an action.  To prevent this, we run this routine against the enum we generate on file load.
 *
 * This routine does nothing when not in __DEV__ mode
 * @export
 * @param {string} moduleName name of the file and location
 * @param {string} prefix prefix we want to enforce against all action names
 * @param {object} types enum
 * @returns
 */
export function validateActionTypes(moduleName: string, prefix: string, types: object) {
    // don't do anything if we're not in DEV mode
    if (!__DEV__) {
        return;
    }

    if (!types) {
        throw new Error(`ActionType enum for ${moduleName}' has an empty enum`);
    }

    if (!actionNames) {
        actionNames = {};
    }

    for (const key in types) {
        if (types.hasOwnProperty(key)) {
            if (types[key].indexOf(prefix + '_') !== 0) {
                throw new Error(`ActionType enum with key:'${key}' name:'${types[key]}' `
                    + `does not contain '${prefix}' as a prefix`);
            }

            if (actionNames[types[key]] && (actionNames[types[key]] !== moduleName)) {
                throw new Error(`ActionType enum with key:'${key}' name:'${types[key]}' `
                    + `already exists in another module: '${actionNames[types[key]]}'`);
            }

            actionNames[types[key]] = moduleName;
        }
    }
}

export interface GlobalHandler<S> {
    /**
     * Wrapper function that will be applied to all reducers in a reducer map.
     * @param reducer The reducer being wrapped.
     */
    reducerWrapper: (reducer: Reducer<S[keyof S] | undefined>) => Reducer<S[keyof S] | undefined>;

    /**
     * String array of keys from the reducer map that will be blacklisted. That is,
     * the reducers from the Reducer Map corresponding to these keys will not be
     * wrapped.
     *
     * @type {string[]}
     */
    excludedReducersFromMap?: string[];
}

type GenericGlobalHandler = GlobalHandler<object>;

/**
 * A ReducerGlobalHandler is a helper class that allows you to compose a reducer onto
 * all reducers in a reducer map.
 *
 * @example
 * // This example demonstrates how to call validateState on all reducers except debug
 * // and globalApi. For more examples, see the unit tests.
 *
 * const rootReducer = combineReducers(new ReducerGlobalHandler()
 *    .registerGlobalHandler(
 *    {
 *      excludedReducersFromMap: ['debug', 'globalApi'],
 *      reducerWrapper: (reducer) => (state, action) => {
 *        const newState = reducer(state, action);
 *        return validateState(newState);
 *      },
 *    } as GlobalHandler<AppReduxState>)
 *    .bindToReducers(reducers));
 *
 * @export
 * @class ReducerGlobalHandler
 */
export class ReducerGlobalHandler {
    private handlers: GenericGlobalHandler[] = [];

    /**
     * Registers a GlobalHandler that you then apply to the ReducersMapObject with the
     * bindToReducers method.
     *
     * @param {GlobalHandler} handler A GlobalHandler object.
     * @returns {this}
     */
    public registerGlobalHandler(handler: GenericGlobalHandler): this {
        this.handlers.push(handler);
        return this;
    }

    /**
     * Applies all registered GlobalHandler objects to the ReducersMapObject.
     *
     * @param {ReducersMapObject} reducersMapObject
     * @returns {ReducersMapObject}
     */
    public bindToReducers(reducersMapObject: ReducersMapObject): ReducersMapObject {
        this.handlers.forEach((handler: GenericGlobalHandler) => {
            const { excludedReducersFromMap } = handler;

            const reducerMapObjectKeys = Object.keys(reducersMapObject);
            const keysToMap = excludedReducersFromMap
                ? difference(reducerMapObjectKeys, excludedReducersFromMap) :
                reducerMapObjectKeys;

            if (__DEV__ && excludedReducersFromMap) {
                // check for possible programmer mistakes during dev mode only.
                const numToBeExcluded = excludedReducersFromMap.length;
                if (keysToMap.length + numToBeExcluded !== reducerMapObjectKeys.length) {
                    const keyNotFound = excludedReducersFromMap.find((e) => keysToMap.indexOf(e) === -1);
                    logger('bindToReducers' +
                        `There are some keys not found in the reducers object map, such as ${keyNotFound}`);
                }
            }

            keysToMap.forEach((key: string) => {
                // wrap everything that isn't excluded.
                reducersMapObject[key] = handler.reducerWrapper(reducersMapObject[key]);
            });

        });

        return reducersMapObject;
    }
}

export default ReducerGlobalHandler;
