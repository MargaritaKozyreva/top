import React, { useEffect, useRef, useState, KeyboardEvent } from "react";
import StarIcon from "@ui/Icons/star.svg";
import styles from "./raiting.module.scss";

import cn from "classnames";

interface RaitingProps {
  items: number;
  currentValue: number;
  isEditable: boolean;
}

const Rating: React.FC<RaitingProps> = React.memo((props) => {
  const { items = 1, currentValue = 0, isEditable = false } = props;
  //const fillCount = (currentValue * items) / 100;
  const [ratingArray, setArray] = useState<JSX.Element[]>(
    Array.from(Array(items).fill(<></>))
  );
  const [newRatingValue, setNewRatingValue] = useState<number>(currentValue);

  useEffect(() => {
    constructRaiting(currentValue);
  }, [currentValue]);

  useEffect(() => {
    constructRaiting(newRatingValue);
  }, [newRatingValue]);

  const changeDisplay = (raiting: number) => {
    if (!isEditable) {
      return;
    }
    constructRaiting(raiting);
  };
  const changeRaiting = (newRaiting: number) => {
    if (!isEditable) {
      return;
    }
    setNewRatingValue(newRaiting);
  };

  const handleSpace = (
    newRaiting: number,
    event: KeyboardEvent<SVGAElement>
  ) => {
    if (event.code !== "Space") {
      return;
    }
    setNewRatingValue(newRaiting);
  };

  const constructRaiting = (currentRaiting: number) => {
    const updateArray: Array<JSX.Element> = ratingArray.map((starItem, i) => (
      <StarIcon
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(newRatingValue)}
        onClick={() => changeRaiting(i + 1)}
        onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
          isEditable === true && handleSpace(i + 1, e)
        }
        tabIndex={isEditable ? 0 : -1}
        key={i}
        className={cn(styles.star, {
          [styles.fill]: i < currentRaiting,
        })}
      />
    ));

    setArray(updateArray);
  };

  return (
    <div
      className={cn(styles.raiting, {
        [styles.isEditable]: isEditable,
      })}
    >
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
});

export { Rating };
