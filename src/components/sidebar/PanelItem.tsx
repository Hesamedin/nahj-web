/**
 * @Author:             Hesam
 * @Date:               Apr 12 2018
 * @Filename:           PanelItem.tsx
 * @Copyright: Copyright (c) Kian Mobilesoft Ltd. All rights reserved.
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateAction, { SetContent } from '../../actions/content';
import article from '../../models/article'

export interface PanelItemProps {
    key: number;
    art: article,
    displayContentById: (article: article) => SetContent;
}

class PanelItem extends React.Component<PanelItemProps> {

    public render() {
        return (
            <a
                key={this.props.key}
                className="panel-block"
                onClick={this.onItemClick}
            >
                {this.props.art.id}. {this.props.art.title}
            </a>
        );
    }

    private onItemClick = () => {
        this.props.displayContentById(this.props.art);
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        displayContentById: (art: article) => CreateAction.setDetailContentById(art)
    },
    dispatch
);

export default connect(null, mapDispatchToProps)(PanelItem);