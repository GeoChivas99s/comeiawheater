import React from "react";
import Home from "pages/Home";
import City from "pages/City";
import { publicPages } from "utils/publicPages";
import { BrowserRouter, Route, Switch  } from "react-router-dom";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path={publicPages.home} component={Home} />
        <Route exact path={publicPages.city} component={City} />
      </Switch>
    </BrowserRouter>
  );
}
 