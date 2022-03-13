import React, { ReactNode } from "react";
import styles from "./Text.module.scss";
import cn from "classnames";
import { DetailedHTMLProps } from "react";
import { HTMLAttributes } from "react";

export interface TextProps {
  readonly children: ReactNode | string;
  readonly className?: any;
  readonly size?: "s" | "m" | "l";
}

export interface SpanProps extends DetailedHTMLProps<HTMLAttributes<TextProps>, TextProps> {
  readonly type: "span";
}
export interface PProps extends TextProps {
  readonly type: "p";
}

export interface HeaderProps extends TextProps {
  readonly type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Text = ({ type, children, className, size }: any) => {
  const Text = type as keyof JSX.IntrinsicElements;

  return (
    <Text
      className={cn(styles.text, className, {
        [styles[type]]: type,
        [styles[`size-${size}`]]: size,
      })}
    >
      {children}
    </Text>
  );
};
export { Text };
