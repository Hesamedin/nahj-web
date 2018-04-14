/**
 * @Author:             Hesam
 * @Date:               Apr 12 2018
 * @Filename:           SideBarPanel.tsx
 * @Copyright: Copyright (c) Kian Mobilesoft Ltd. All rights reserved.
 */
import * as React from 'react';
import { connect } from 'react-redux';
import article from '../../models/article';
import PanelItem from './PanelItem';
import SidebarSection from './SidebarSection';
import { NahjReduxState } from '../../reducers';

export interface SidebarPanelProps {
    title: string;
    articles: article[];
}

class SidebarPanel extends React.Component<SidebarPanelProps> {

    public render() {
        return (
            <nav className="panel body-sidebar">
                <p className="panel-heading sidebar-title">{this.props.title}</p>

                {
                    this.props.articles.map((it, i) => this.getPanelItem(i, it))
                }

                <SidebarSection/>
            </nav>
        );
    }

    private getPanelItem = (key: number, art: article) => <PanelItem key={key} art={art}/>;
}

const mapStateToProps = (state: NahjReduxState) => ({
    articles: state.firebase.articles
});

export default connect(mapStateToProps)(SidebarPanel);