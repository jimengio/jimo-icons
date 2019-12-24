import ReactDOM from "react-dom";
import React, { FC, useState } from "react";
import { css, cx } from "emotion";
import copy from "copy-to-clipboard";

import JimoIcon, { EJimoIcon } from "../src/jimo-icon";

let capital = (text: string) => {
  return text.replace(/\-\w/g, (x) => {
    return x[1].toUpperCase();
  });
};

let Container: FC<{}> = React.memo((props) => {
  let [copied, setCopied] = useState(null as string);

  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  let names = Object.keys(EJimoIcon).map((key) => EJimoIcon[key]);

  return (
    <div className={styleContainer}>
      {names.map((name) => {
        let variableName = capital(name);
        return (
          <div
            key={variableName}
            className={cx(styleExample)}
            onClick={() => {
              copy(variableName);
              setCopied(variableName);
              setTimeout(() => {
                setCopied(null);
              }, 600);
            }}
          >
            <JimoIcon className={styleIcon} name={name} />
            <div className={styleName}>{copied === variableName ? <span className={styleCopied}>Copied!</span> : variableName}</div>
          </div>
        );
      })}
    </div>
  );
});

const renderApp = () => {
  ReactDOM.render(<Container />, document.querySelector(".app"));
};

window.onload = renderApp;

declare var module: any;

const styleExample = css`
  font-family: Helvetica;
  height: 80px;
  display: inline-flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 120px;
  text-align: center;
  vertical-align: top;
  padding: 8px;
  cursor: pointer;

  :hover {
    background-color: hsl(0, 0%, 98%);
  }
`;

const styleIcon = css`
  margin-bottom: 8px;
  vertical-align: middle;
  display: inline-block;
  font-size: 24px;
  box-shadow: 0 0 1px hsla(0, 0%, 0%, 0.4);
`;

const styleName = css`
  vertical-align: middle;
  color: hsl(0, 0%, 70%);
  font-size: 13px;
  word-break: break-all;
`;

const styleContainer = css`
  padding: 40px 8px;
`;

let styleCopied = css`
  color: black;
  font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
`;
