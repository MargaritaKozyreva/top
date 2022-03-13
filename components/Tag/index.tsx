import React from "react";
import styles from "./Tag.module.scss";
import cn from "classnames";
import { DetailedHTMLProps } from "react";
import { HTMLAttributes } from "react";
import { ReactNode } from "react";
import { Span } from "components/Text";

interface ITag
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  design?: "primary" | "ghost" | "red" | "green" | "grey";
  children: ReactNode;
  className?: string;
  href?: string;
}

const Tag: React.FC<ITag> = (props) => {
  const { design = "primary", className, href, ...attr } = props;
  return (
    <div
      className={cn(styles.tag, className, {
        [styles[design]]: design,
      })}
      {...attr}
    >
      {href ? <a href={href}>{attr.children}</a> : <Span>{attr.children}</Span>}
    </div>
  );
};

export { Tag };
