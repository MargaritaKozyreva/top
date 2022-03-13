import React, { PropsWithChildren } from "react";
import styles from "./hHData.module.scss";
import cn from "classnames";
import { DetailedHTMLProps } from "react";
import { HTMLAttributes } from "react";
import { TopPageDTO } from "interfaces/page.interface";
import { Card } from "components/Card/Card";

import StarCircleIcon from "@ui/Icons/starCircle.svg";
import { priceRu } from "helpers/helpers";

export const HhData: React.FC<PropsWithChildren<TopPageDTO.HhData>> = (
  props
) => {
  const { children, ...attr } = props;
  return (
    <div className={styles.hh}>
      <Card design="white" className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{attr.count}</div>
      </Card>

      <Card design="white" className={styles.salary}>
        <div className={styles.salaryCard}>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(attr.juniorSalary)}</div>
          <div className={styles.salaryRate}>
            <StarCircleIcon className={styles.filled} />
            <StarCircleIcon />
            <StarCircleIcon />
          </div>
        </div>
        <div className={styles.salaryCard}>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(attr.middleSalary)}</div>
          <div className={styles.salaryRate}>
            <StarCircleIcon className={styles.filled} />
            <StarCircleIcon className={styles.filled} />
            <StarCircleIcon />
          </div>
        </div>
        <div className={styles.salaryCard}>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(attr.seniorSalary)}</div>
          <div className={styles.salaryRate}>
            <StarCircleIcon className={styles.filled} />
            <StarCircleIcon className={styles.filled} />
            <StarCircleIcon className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
