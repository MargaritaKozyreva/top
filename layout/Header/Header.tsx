import React from "react";
import { ReactNode, HTMLAttributes, DetailedHTMLProps } from "react";

import styles from './Header.module.scss';

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header:React.FC<HeaderProps> = (props) => {
  return (<div {...props} >
      Header
  </div>)
};

export { Header };
