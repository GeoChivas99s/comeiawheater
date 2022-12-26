import React, { FC } from "react";
import { LayoutProps } from "./Layout.types";
import { Helmet } from "react-helmet";
import './style.scss';

const Layout: FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className="layout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
      <div id="layoutContent">{children}</div>
    </div>
  );
};

export default Layout;
