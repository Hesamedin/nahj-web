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
    letters: article[];
}

class SidebarPanel extends React.Component<SidebarPanelProps> {

    public render() {
        return(
            <nav className="panel body-sidebar">
                <p className="panel-heading sidebar-title">{this.props.title}</p>

                {
                    this.props.letters.map((it, i) => PanelItem({ key: i, id: it.id, title: it.title }))
                }

                <SidebarSection />
            </nav>
        );
    }
}

const mapStateToProps = (state: NahjReduxState) => ({
    letters: state.firebase.letters
});

export default connect(mapStateToProps)(SidebarPanel);