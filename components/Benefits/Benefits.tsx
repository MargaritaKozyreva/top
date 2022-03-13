import React, { PropsWithChildren } from "react";
import CheckIcon from "@ui/Icons/check.svg";

import styles from "./Benefits.module.scss";
import { H3, Span } from "components/Text";

import cn from "classnames";
import { TopPageDTO } from "interfaces/page.interface";

interface BenefitSectionsInterface {
  advantages: TopPageDTO.Advantage[];
}

const BenefitSections: React.FC<BenefitSectionsInterface> = (props) => {
  const { advantages } = props;

  return (
    <>
      {advantages.map((advantage) => (
        <div key={advantage._id} className={cn(styles.advantage)}>
          <span className={styles.circleWrapper}>
            <CheckIcon />
          </span>
          {advantage.title && (
            <div className={styles.title}>{advantage.title}</div>
          )}
          <hr className={styles.vline} />
          <div className={styles.description}>{advantage.description}</div>
        </div>
      ))}
    </>
  );
};

export { BenefitSections };
