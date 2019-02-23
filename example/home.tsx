import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import React from "react";
import { css, cx } from "emotion";

import JimoIcon, { EJimoIcon } from "../src/jimo-icon";

class Container extends React.Component<any, any> {
  render() {
    let names = Object.keys(EJimoIcon).map(key => EJimoIcon[key]);

    return (
      <div className={styleContainer}>
        {names.map(name => {
          return (
            <div key={name} className={styleExample}>
              <JimoIcon className={styleIcon} name={name} />
              <div className={styleName}>{name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const renderApp = () => {
  ReactDOM.render(<Container />, document.querySelector(".app"));
};

window.onload = renderApp;

declare var module: any;

if (module.hot) {
  module.hot.accept([], () => {
    renderApp();
  });
}

const styleExample = css`
  font-family: Helvetica;
  height: 80px;
  display: inline-block;
  width: 120px;
  text-align: center;
  vertical-align: top;
  padding: 8px;
`;

const styleIcon = css`
  margin-bottom: 8px;
  vertical-align: middle;
  display: inline-block;
  font-size: 24px;
`;

const styleName = css`
  vertical-align: middle;
  color: hsl(0, 0%, 70%);
  font-size: 13px;
  word-break: break-all;
  min-height: 40px;
`;

const styleContainer = css`
  padding: 40px 8px;
`;
