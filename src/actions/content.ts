/**
 * @Author:             Hesam
 * @Date:               Apr 13 2018
 * @Filename:           content.ts
 * @Copyright: Copyright (c) Kian Mobilesoft Ltd. All rights reserved.
 */

import { Action } from '../utility/nj_types';
import { validateActionTypes } from '../utility/validateActionTypes';

export enum ContentActionTypes {
    setDetailContent = 'nahj_content_set_detail'
}

validateActionTypes('ContentActionTypes', 'nahj_content', ContentActionTypes);

export type SetContent = Action<ContentActionTypes.setDetailContent, number>;

const CreateAction = {
    setDetailContentById: (id: number): SetContent => ({
        payload: id,
        type: ContentActionTypes.setDetailContent
    })
};

export default CreateAction;