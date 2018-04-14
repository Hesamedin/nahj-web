/**
 * @Author:             Hesam
 * @Date:               Apr 12 2018
 * @Filename:           SideBarPanel.tsx
 * @Copyright: Copyright (c) Kian Mobilesoft Ltd. All rights reserved.
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateAction from '../../actions/firebase';
import { logger } from '../../utility/logger';
import { getListOfLetters } from '../../firebase/utility';
import article from '../../models/article';

enum SectionItem {
    FIRST_10_ITEMS,
    SECOND_10_ITEMS,
    THIRD_10_ITEMS,
    FOURTH_10_ITEMS,
    FIFTH_10_ITEMS,
    SIXTH_10_ITEMS,
    SEVENTH_10_ITEMS,
    EIGHTH_10_ITEMS
}

interface SidebarSectionStates {
    items_1_10_selected: boolean;
    items_11_20_selected: boolean;
    items_21_30_selected: boolean;
    items_31_40_selected: boolean;
    items_41_50_selected: boolean;
    items_51_60_selected: boolean;
    items_61_70_selected: boolean;
    items_71_80_selected: boolean;
}

interface SidebarSectionProps {
    setLetters: (articles: article[]) => void;
}

class SidebarSection extends React.Component<SidebarSectionProps, SidebarSectionStates> {

    constructor(props: SidebarSectionProps) {
        super(props);
        this.state = {
            items_1_10_selected: true,
            items_11_20_selected: false,
            items_21_30_selected: false,
            items_31_40_selected: false,
            items_41_50_selected: false,
            items_51_60_selected: false,
            items_61_70_selected: false,
            items_71_80_selected: false
        };
    }

    public componentDidMount() {
        this.fetchSectionList(0, 9);
    }

    public render() {
        return (
            <p className="panel-tabs">
                <a className={this.getClassName(this.state.items_1_10_selected)}
                   onClick={this.onSection1Click}>10</a>
                <a className={this.getClassName(this.state.items_11_20_selected)}
                   onClick={this.onSection2Click}>20</a>
                <a className={this.getClassName(this.state.items_21_30_selected)}
                   onClick={this.onSection3Click}>30</a>
                <a className={this.getClassName(this.state.items_31_40_selected)}
                   onClick={this.onSection4Click}>40</a>
                <a className={this.getClassName(this.state.items_41_50_selected)}
                   onClick={this.onSection5Click}>50</a>
                <a className={this.getClassName(this.state.items_51_60_selected)}
                   onClick={this.onSection6Click}>60</a>
                <a className={this.getClassName(this.state.items_61_70_selected)}
                   onClick={this.onSection7Click}>70</a>
                <a className={this.getClassName(this.state.items_71_80_selected)}
                   onClick={this.onSection8Click}>80</a>
            </p>
        );
    }

    private fetchSectionList(from: number, to: number) {
        getListOfLetters(from, to).then((articles) => {
            this.props.setLetters(articles);
        }).catch((error) => {
            logger(error.message);
        });
    }

    private toggleSection = (sectionItem: SectionItem) => {
        if (sectionItem === SectionItem.FIRST_10_ITEMS && this.state.items_1_10_selected) {
            return;
        }
        if (sectionItem === SectionItem.SECOND_10_ITEMS && this.state.items_11_20_selected) {
            return;
        }
        if (sectionItem === SectionItem.THIRD_10_ITEMS && this.state.items_21_30_selected) {
            return;
        }
        if (sectionItem === SectionItem.FOURTH_10_ITEMS && this.state.items_31_40_selected) {
            return;
        }
        if (sectionItem === SectionItem.FIFTH_10_ITEMS && this.state.items_41_50_selected) {
            return;
        }
        if (sectionItem === SectionItem.SIXTH_10_ITEMS && this.state.items_51_60_selected) {
            return;
        }
        if (sectionItem === SectionItem.SEVENTH_10_ITEMS && this.state.items_61_70_selected) {
            return;
        }
        if (sectionItem === SectionItem.EIGHTH_10_ITEMS && this.state.items_71_80_selected) {
            return;
        }

        //
        this.setState({
            items_1_10_selected: sectionItem === SectionItem.FIRST_10_ITEMS,
            items_11_20_selected: sectionItem === SectionItem.SECOND_10_ITEMS,
            items_21_30_selected: sectionItem === SectionItem.THIRD_10_ITEMS,
            items_31_40_selected: sectionItem === SectionItem.FOURTH_10_ITEMS,
            items_41_50_selected: sectionItem === SectionItem.FIFTH_10_ITEMS,
            items_51_60_selected: sectionItem === SectionItem.SIXTH_10_ITEMS,
            items_61_70_selected: sectionItem === SectionItem.SEVENTH_10_ITEMS,
            items_71_80_selected: sectionItem === SectionItem.EIGHTH_10_ITEMS
        });
    };

    private getClassName = (isActive: boolean) => {
        return (isActive ? 'is-active' : '');
    };

    private onSection1Click = () => {
        this.toggleSection(SectionItem.FIRST_10_ITEMS);
        this.fetchSectionList(0, 9);
    };

    private onSection2Click = () => {
        this.toggleSection(SectionItem.SECOND_10_ITEMS);
        this.fetchSectionList(10, 19);
    };

    private onSection3Click = () => {
        this.toggleSection(SectionItem.THIRD_10_ITEMS);
        this.fetchSectionList(20, 29);
    };

    private onSection4Click = () => {
        this.toggleSection(SectionItem.FOURTH_10_ITEMS);
        this.fetchSectionList(30, 39);
    };

    private onSection5Click = () => {
        this.toggleSection(SectionItem.FIFTH_10_ITEMS);
        this.fetchSectionList(40, 49);
    };

    private onSection6Click = () => {
        this.toggleSection(SectionItem.SIXTH_10_ITEMS);
        this.fetchSectionList(50, 59);
    };

    private onSection7Click = () => {
        this.toggleSection(SectionItem.SEVENTH_10_ITEMS);
        this.fetchSectionList(60, 69);
    };

    private onSection8Click = () => {
        this.toggleSection(SectionItem.EIGHTH_10_ITEMS);
        this.fetchSectionList(70, 79);
    };
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        setLetters: (letters: article[]) => dispatch(CreateAction.setLettersAction(letters))
    },
    dispatch);

export default connect(null, mapDispatchToProps)(SidebarSection);