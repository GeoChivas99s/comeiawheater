import React, { FC } from "react";
import { LayoutProps } from "./Layout.types";
import {Helmet} from "react-helmet";
 
const Layout: FC<LayoutProps> = ({pageTitle, children}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <div>
        {children}
    </div>
    </>
  );
};

export default Layout;
