import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import ChooseSize from './pages/ChooseSize';
import ChooseCrust from './pages/ChooseCrust';
import ChooseToppings from './pages/ChooseToppings';
import Confirmation from './pages/Confirmation';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/choose-size" component={ChooseSize} exact />
                <Route path="/choose-crust" component={ChooseCrust} exact />
                <Route path="/choose-toppings" component={ChooseToppings} exact />
                <Route path="/confirmation" component={Confirmation} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;