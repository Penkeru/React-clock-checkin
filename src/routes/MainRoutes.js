
import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import DetailsPage from '../pages/details/DetailsPage';
import MainPage from '../pages/main/Main';
import PageNotFound from '../pages/pageNotFound/PageNotFound';

const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Redirect exact to='/home' />
            </Route>
            <Route path='/home' component={MainPage} />
            <Route path='/details' component={DetailsPage} />
            <Route path='*' component={PageNotFound}></Route>
        </Switch>
    );
};

export default MainRoutes;