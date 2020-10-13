import React from 'react';
import {Router, Route,} from 'react-router-dom';
import App from './App';
import CardApp from './Card-App';
import History from './History'
const Custom = () => (

    <Router history={History}>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/CardApp' component={CardApp} />


        </div>



    </Router>

)

export default Custom;