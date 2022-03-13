import React from "react";
import {
  HTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  FunctionComponent,
} from "react";

import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

import styles from "./Layout.module.scss";
import { AppContextProvider, IAppContext } from "context/app.context";

export interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, ...attr } = props;
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};

export { Layout };
