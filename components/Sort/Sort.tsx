import React, { HTMLAttributes, DetailedHTMLProps } from "react";
import SortIcon from "@ui/Icons/sort.svg";

import cn from "classnames";
import styles from "./Sort.module.scss";
import { Span } from "components/Text";

export enum SortEnum {
  Raiting,
  Price,
}

interface SortProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}

const Sort: React.FC<SortProps> = (props): JSX.Element => {
  const { className, sort, setSort } = props;

  return (
    <div className={cn(styles.sort, className)} {...sort}>
      <span
        onClick={() => setSort(SortEnum.Raiting)}
        className={cn(styles.sortWrapper, {
          [styles.active]: sort === SortEnum.Raiting,
        })}
      >
        <SortIcon />
        <Span>По рейтингу</Span>
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn(styles.sortWrapper, {
          [styles.active]: sort === SortEnum.Price,
        })}
      >
        <SortIcon />
        <Span>По цене</Span>
      </span>
    </div>
  );
};

export default Sort;
