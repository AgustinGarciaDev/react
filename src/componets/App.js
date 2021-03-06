import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Layout from './Layout';
import Badges from '../pages/badges';
import BadgeNew from '../pages/badgeNew';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';


function App() { 
    return (
        <BrowserRouter> 
            <Layout>
                <Switch>
            <Route exact path="/"  component={Home} />
            <Route exact path="/badges" component={Badges} />
            <Route exact  path="/badges/new" component={ BadgeNew } />
            <Route component={NotFound} />
          
                </Switch>
            </Layout>
         </BrowserRouter> 
    );
}
export default App;