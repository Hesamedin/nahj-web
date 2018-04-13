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

export interface PanelItemProps {
    key: number;
    id: number;
    title: string;
    displayContentById: (id: number) => SetContent;
}

class PanelItem extends React.Component<PanelItemProps> {

    public render() {
        return (
            <a
                key={this.props.key}
                className="panel-block"
                onClick={this.onItemClick}
            >
                {this.props.id}. {this.props.title}
            </a>
        );
    }

    private onItemClick = () => {
        this.props.displayContentById(this.props.id);
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        displayContentById: (id: number) => CreateAction.setDetailContentById(id)
    },
    dispatch
);

export default connect(null, mapDispatchToProps)(PanelItem);