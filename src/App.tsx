import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MenuComponent from './components/MenuComponent';
import LoginComponent from './components/LoginComponent';
import MI_LettersComponent from './components/MI_LettersComponent';
import MI_SpeechesComponent from './components/MI_SpeechesComponent';
import MI_VerdictsComponent from './components/MI_VerdictsComponent';
import MI_WisdomComponent from './components/MI_WisdomComponent';
import MI_PrefaceDashtiComponent from './components/MI_PrefaceDashtiComponent';
import MI_PrefaceSeyedRaziComponent from './components/MI_PrefaceSeyedRaziComponent';

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
            <Route path={SCREEN_ROOT} exact={true} component={MI_LettersComponent}/>
            <Route path={SCREEN_LETTERS} component={MI_LettersComponent}/>
            <Route path={SCREEN_SPEECHES} component={MI_SpeechesComponent}/>
            <Route path={SCREEN_VERDICTS} component={MI_VerdictsComponent}/>
            <Route path={SCREEN_WISDOM} component={MI_WisdomComponent}/>
            <Route path={SCREEN_PREFACE_DASHTI} component={MI_PrefaceDashtiComponent}/>
            <Route path={SCREEN_PREFACE_SEYED_RAZI} component={MI_PrefaceSeyedRaziComponent}/>
        </Switch>

        <FooterComponent/>
    </div>
);

export default AppRouter;
