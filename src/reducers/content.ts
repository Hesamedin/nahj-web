/**
 * @Author:             Hesam
 * @Date:               Apr 13 2018
 * @Filename:           content.ts
 * @Copyright: Copyright (c) Kian Mobilesoft Ltd. All rights reserved.
 */
import { Reducer } from 'redux';
import { ContentActionTypes, SetContent } from '../actions/content';
import article from '../models/article'

export interface ContentState {
    article: article
}

const INITIAL_STATE: ContentState = {
    article: {
        id: 0,
        catCode: 0,
        catName: '',
        title: '',
        description: '',
        sound: ''
    }
};

const contentReducer: Reducer<ContentState> = (
    state: ContentState = INITIAL_STATE,
    action: SetContent
): ContentState => {
    switch (action.type) {
        case ContentActionTypes.setDetailContent:
            return {
                ...state,
                article: action.payload
            };

        default:
            return state;
    }
};

export default contentReducer;
