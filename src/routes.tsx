import React from "react";
import Home from "pages/Home";
import { publicPages } from "utils/publicPages";
import { BrowserRouter, Route, Switch  } from "react-router-dom";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={publicPages.home} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
 