/**
 * @Author:             Hesam
 * @Date:               Apr 13 2018
 * @Filename:           content.ts
 * @Copyright: Copyright (c) Kian Mobilesoft Ltd. All rights reserved.
 */

import { Action } from '../utility/nj_types';
import { validateActionTypes } from '../utility/validateActionTypes';
import article from '../models/article'

export enum ContentActionTypes {
    setDetailContent = 'nahj_content_set_detail'
}

validateActionTypes('ContentActionTypes', 'nahj_content', ContentActionTypes);

export type SetContent = Action<ContentActionTypes.setDetailContent, article>;

const CreateAction = {
    setDetailContentById: (art: article): SetContent => ({
        payload: art,
        type: ContentActionTypes.setDetailContent
    })
};

export default CreateAction;