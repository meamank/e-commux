//Need to import react becuase the Route itself is a component.
import React from 'react';
//Import the Route, and Switch Comopnent used for defining your routes.
//Switch responsible for directing to first child that matches thier respective route. 
import { Route, Switch } from 'react-router-dom';
//Now import the components you'll pass as props.
import Home from './components/container/Home/Home';

//When dealing with default exports we do not even need to name the export since when it is imported we can name it whatever we want.
export default (
    <Switch>
        {/*Use the exact keyword means it will direct to that exact route, and used primarily when creating sub routes. */}
        <Route exact path='/' component={Home} />
    </Switch>
)