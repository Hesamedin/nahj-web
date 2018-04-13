import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push, RouterAction } from 'react-router-redux';
import {
    SCREEN_LETTERS,
    SCREEN_PREFACE_DASHTI,
    SCREEN_PREFACE_SEYED_RAZI,
    SCREEN_SPEECHES,
    SCREEN_VERDICTS,
    SCREEN_WISDOM
} from '../../App';
import '../../styles/mystyles.css';

enum MenuItems {
    MENU_LETTERS,
    MENU_PREFACE_DASHTI,
    MENU_PREFACE_SEYED_RZI,
    MENU_SPEECHES,
    MENU_VERDICTS,
    MENU_WISDOM
}

interface MenuComponentStates {
    isLettersActive: boolean,
    isPrefaceDashtiActive: boolean,
    isPrefaceSeyedRaziActive: boolean,
    isSpeechesActive: boolean,
    isVerdictsActive: boolean,
    isWisdomActive: boolean
}

interface MenuComponentProps {
    isMenuEnabled: boolean,
    navToLettersScreen: () => RouterAction,
    navToPrefaceDashtiScreen: () => RouterAction,
    navToPrefaceSeyedRaziScreen: () => RouterAction,
    navToSpeechesScreen: () => RouterAction,
    navToVerdictsScreen: () => RouterAction,
    navToWisdomScreen: () => RouterAction
}

class MenuComponent extends React.Component<MenuComponentProps, MenuComponentStates> {

    constructor(props: MenuComponentProps) {
        super(props);
        this.state = {
            isLettersActive: true,
            isPrefaceDashtiActive: false,
            isPrefaceSeyedRaziActive: false,
            isSpeechesActive: false,
            isVerdictsActive: false,
            isWisdomActive: false
        };
    }

    public render() {
        const { isMenuEnabled } = this.props;
        if (!isMenuEnabled) {
            return (null);
        }

        return (
            <div className="container">
                <div className="tabs is-centered is-toggle is-medium">
                    <ul>
                        <li className={this.getClassName(this.state.isLettersActive)}>
                            <a onClick={this.onMILettersClick}>Letters</a>
                        </li>
                        <li className={this.getClassName(this.state.isSpeechesActive)}>
                            <a onClick={this.onMISpeechClick}>Speeches</a>
                        </li>
                        <li className={this.getClassName(this.state.isVerdictsActive)}>
                            <a onClick={this.onMIVerdictClick}>Verdicts</a>
                        </li>
                        <li className={this.getClassName(this.state.isWisdomActive)}>
                            <a onClick={this.onMIWisdomClick}>Wisdom</a>
                        </li>
                        <li className={this.getClassName(this.state.isPrefaceDashtiActive)}>
                            <a onClick={this.onMIPrefaceDashtiClick}>Preface Dashti</a>
                        </li>
                        <li className={this.getClassName(this.state.isPrefaceSeyedRaziActive)}>
                            <a onClick={this.onMIPrefaceSeyedRaziClick}>Preface Seyed Razi</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    private toggleMenu = (menuItem: MenuItems) => {
        if (menuItem === MenuItems.MENU_LETTERS && this.state.isLettersActive) {
            return;
        }
        if (menuItem === MenuItems.MENU_SPEECHES && this.state.isSpeechesActive) {
            return;
        }
        if (menuItem === MenuItems.MENU_VERDICTS && this.state.isVerdictsActive) {
            return;
        }
        if (menuItem === MenuItems.MENU_WISDOM && this.state.isWisdomActive) {
            return;
        }
        if (menuItem === MenuItems.MENU_PREFACE_DASHTI && this.state.isPrefaceDashtiActive) {
            return;
        }
        if (menuItem === MenuItems.MENU_PREFACE_SEYED_RZI && this.state.isPrefaceSeyedRaziActive) {
            return;
        }

        //
        this.setState({
            isLettersActive: menuItem === MenuItems.MENU_LETTERS,
            isPrefaceDashtiActive: menuItem === MenuItems.MENU_PREFACE_DASHTI,
            isPrefaceSeyedRaziActive: menuItem === MenuItems.MENU_PREFACE_SEYED_RZI,
            isSpeechesActive: menuItem === MenuItems.MENU_SPEECHES,
            isVerdictsActive: menuItem === MenuItems.MENU_VERDICTS,
            isWisdomActive: menuItem === MenuItems.MENU_WISDOM
        });
    };

    private getClassName = (isActive) => {
        return (isActive ? 'is-active' : '');
    };

    private onMILettersClick = () => {
        this.toggleMenu(MenuItems.MENU_LETTERS);
        this.props.navToLettersScreen();
    };

    private onMISpeechClick = () => {
        this.toggleMenu(MenuItems.MENU_SPEECHES);
        this.props.navToSpeechesScreen();
    };

    private onMIVerdictClick = () => {
        this.toggleMenu(MenuItems.MENU_VERDICTS);
        this.props.navToVerdictsScreen();
    };

    private onMIWisdomClick = () => {
        this.toggleMenu(MenuItems.MENU_WISDOM);
        this.props.navToWisdomScreen();
    };

    private onMIPrefaceDashtiClick = () => {
        this.toggleMenu(MenuItems.MENU_PREFACE_DASHTI);
        this.props.navToPrefaceDashtiScreen();
    };

    private onMIPrefaceSeyedRaziClick = () => {
        this.toggleMenu(MenuItems.MENU_PREFACE_SEYED_RZI);
        this.props.navToPrefaceSeyedRaziScreen();
    };
}

const mapStateToProps = (state) => ({
    isMenuEnabled: state.menu.isEnabled
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        navToLettersScreen: () => push(SCREEN_LETTERS),
        navToPrefaceDashtiScreen: () => push(SCREEN_PREFACE_DASHTI),
        navToPrefaceSeyedRaziScreen: () => push(SCREEN_PREFACE_SEYED_RAZI),
        navToSpeechesScreen: () => push(SCREEN_SPEECHES),
        navToVerdictsScreen: () => push(SCREEN_VERDICTS),
        navToWisdomScreen: () => push(SCREEN_WISDOM)
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
