import React, { PropsWithChildren } from "react";
import styles from "./Card.module.scss";
import cn from "classnames";
import { DetailedHTMLProps } from "react";
import { HTMLAttributes } from "react";

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  design: "white" | "blue";
}

export const Card: React.FC<PropsWithChildren<CardProps>> = (props) => {
  const { children, className, design = "white", ...attr } = props;
  return (
    <div
      className={cn(styles.card, className, {
        [styles.white]: design === "white",
        [styles.blue]: design === "blue",
      })}
      {...attr}
    >
      {children}
    </div>
  );
};
