import React from "react";

import AuxFile from "../HOC/AuxFile";
import classes from "./Layout.module.scss";

const Layout = (props) => (
  <AuxFile>
    <div> Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.content}>{props.children}</main>
  </AuxFile>
);

export default Layout;
