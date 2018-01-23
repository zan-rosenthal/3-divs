import React from "react";
import { themr } from "react-css-themr";
import appTheme from "./theme.scss";

import ThreeDivs from '../ThreeDivs'

export function App({ theme }) {
  return (
    <div className={theme.app}>
      <ThreeDivs />
    </div>
  );
}

export default themr("", appTheme)(App);
