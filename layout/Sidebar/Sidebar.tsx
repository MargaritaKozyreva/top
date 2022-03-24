import React from "react";
import { HTMLAttributes, DetailedHTMLProps } from "react";
import cn from "classnames";

import styles from "./Sidebar.module.scss";
import { Menu } from "layout/Menu/Menu";
import Logo from "@ui/Icons/logo.svg";
import Link from "next/link";
import { Search } from "components";

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { children, className, ...attr } = props;
  return (
    <div className={cn(className, styles.sidebar)} {...attr}>
      <Link href="/">
        <Logo className={styles.logo} />
      </Link>
      <Search />
      <Menu />
    </div>
  );
};

export { Sidebar };
