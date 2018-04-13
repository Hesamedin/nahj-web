import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import LoginComponent from './components/LoginComponent';
import LettersComponent from './components/menu/LettersComponent';
import MenuComponent from './components/menu/MenuComponent';
import PrefaceDashtiComponent from './components/menu/PrefaceDashtiComponent';
import PrefaceSeyedRaziComponent from './components/menu/PrefaceSeyedRaziComponent';
import SpeechesComponent from './components/menu/SpeechesComponent';
import VerdictsComponent from './components/menu/VerdictsComponent';
import WisdomComponent from './components/menu/WisdomComponent';

export const SCREEN_ROOT = '/';
export const SCREEN_LOGIN = '/login';
export const SCREEN_LETTERS = '/letters';
export const SCREEN_SPEECHES = '/speeches';
export const SCREEN_VERDICTS = '/verdicts';
export const SCREEN_WISDOM = '/wisdom';
export const SCREEN_PREFACE_DASHTI = '/preface_dashti';
export const SCREEN_PREFACE_SEYED_RAZI = '/preface_seyed_razi';

const AppRouter = () => (
    <div>
        <HeaderComponent/>
        <MenuComponent/>

        <Switch>
            <Route path={SCREEN_LOGIN} component={LoginComponent}/>
            <Route path={SCREEN_ROOT} exact={true} component={LettersComponent}/>
            <Route path={SCREEN_LETTERS} component={LettersComponent}/>
            <Route path={SCREEN_SPEECHES} component={SpeechesComponent}/>
            <Route path={SCREEN_VERDICTS} component={VerdictsComponent}/>
            <Route path={SCREEN_WISDOM} component={WisdomComponent}/>
            <Route path={SCREEN_PREFACE_DASHTI} component={PrefaceDashtiComponent}/>
            <Route path={SCREEN_PREFACE_SEYED_RAZI} component={PrefaceSeyedRaziComponent}/>
        </Switch>

        <FooterComponent/>
    </div>
);

export default AppRouter;
