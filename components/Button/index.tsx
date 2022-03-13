import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import ArrowIcon from "@ui/Icons/arrow.svg";
import styles from "./Button.module.css";
import cn from "classnames";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: any;
  design: "primary" | "ghost";
  arrow?: "up" | "right" | "down" | "left" | "none";
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, design, className, arrow = "none", ...attr } = props;
  //const buttonStyle = cn(styles.button, className, styles[design]);
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: design === "primary",
        [styles.ghost]: design === "ghost",
      })}
      {...attr}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.up]: arrow === "up",
            [styles.right]: arrow === "right",
            [styles.down]: arrow === "down",
            [styles.left]: arrow === "left",
          })}
        ></span>
      )}
      {arrow !== "none" && <ArrowIcon className={styles[arrow]} />}
    </button>
  );
};

export { Button };
