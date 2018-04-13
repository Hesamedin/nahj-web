import * as React from 'react';
import { connect } from 'react-redux';
import { push, RouterAction } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import CreateAction, { LogoutAction } from '../actions/auth';
import { SCREEN_LOGIN } from '../App';
import Logo from '../assets/logo.svg';
import { startLogout } from '../firebase/utility';
import { NahjReduxState } from '../reducers';
import '../styles/headerStyle.css';

interface HeaderComponentProps {
    loginStatus: boolean;
    navToLoginScreen: () => RouterAction;
    signedOut: () => LogoutAction;
}

class HeaderComponent extends React.Component<HeaderComponentProps> {

    public render(): JSX.Element {
        const isLoggedIn = this.props.loginStatus;
        return (
            <header className="level header-container">
                <div className="level-left">
                    <div className="level-item">
                        <div className="logo-branding">
                            <img src={Logo} className="logo" alt="logo"/>
                            <h1 className="title is-2 has-text-white">Welcome to Nahj al-Balagha</h1>
                        </div>
                    </div>
                </div>

                <div className="level-right">
                    <div className="level-item">
                        <a className="button"
                           onClick={() => isLoggedIn ? startLogout(this.nextAction) : this.props.navToLoginScreen()}
                        >
                            {isLoggedIn ? 'Logout' : 'Login'}
                        </a>
                    </div>
                </div>
            </header>
        );
    }

    private nextAction = () => {
        this.props.signedOut();
    };
}

const mapStateToProps = (state: NahjReduxState) => ({
    loginStatus: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        navToLoginScreen: () => push(SCREEN_LOGIN),
        signedOut: () => CreateAction.logoutAction()
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
