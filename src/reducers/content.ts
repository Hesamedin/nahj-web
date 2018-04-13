/**
 * @Author:             Hesam
 * @Date:               Apr 13 2018
 * @Filename:           content.ts
 * @Copyright: Copyright (c) Kian Mobilesoft Ltd. All rights reserved.
 */
import { Reducer } from 'redux';
import { ContentActionTypes, SetContent } from '../actions/content';

export interface ContentState {
    articleId: number
}

const INITIAL_STATE: ContentState = {
    articleId: 0
};

const contentReducer: Reducer<ContentState> = (
    state: ContentState = INITIAL_STATE,
    action: SetContent
): ContentState => {
    switch (action.type) {
        case ContentActionTypes.setDetailContent:
            return {
                ...state,
                articleId: action.payload
            };

        default:
            return state;
    }
};

export default contentReducer;
