/**
 * @Author:             Hesam
 * @Date:               Apr 12 2018
 * @Filename:           PanelItem.tsx
 * @Copyright: Copyright (c) Kian Mobilesoft Ltd. All rights reserved.
 */
import * as React from 'react';

export interface PanelItemProps {
    key: number;
    id: number;
    title: string;
}

const PanelItem: React.SFC<PanelItemProps> = (props: PanelItemProps) => (
    <a key={props.key} className="panel-block">{props.id}. {props.title}</a>
);

// Header.defaultProps = {
//     article: null,
// };

export default PanelItem;