import React from "react";
import { ReactNode, HTMLAttributes, DetailedHTMLProps } from "react";
import cn from "classnames";

import { format } from "date-fns";

import styles from "./Footer.module.scss";

export interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer: React.FC<FooterProps> = (props) => {
  const { className, ...attr } = props;
  return (
    <div className={cn(className, styles.footer)} {...attr}>
      <div>
        OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
      </div>

      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </div>
  );
};

export { Footer };
