import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Card } from "components/Card/Card";
import { Rating } from "components/Raiting";
import { Tag } from "components/Tag";

import { ProductDTO } from "interfaces/product.interface";
import styles from "./Product.module.scss";
import cn from "classnames";

export interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductDTO.Model;
}

const Product: React.FC<ProductProps> = (props) => {
  const { className, product, ...attr } = props;
  return (
    <Card className={styles.productCard}>
      <div className={styles.logo}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.raiting}>
        <Rating
          items={5}
          currentValue={product.reviewAvg ?? product.initialRating}
          isEditable={false}
        />
      </div>
      <div className={styles.tags}>
        {product.categories.map((category) => (
          <Tag key={category} design="ghost">
            {category}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>в кредит</div>
      <div className={styles.voices}>{product.reviewCount} отзывов</div>
    </Card>
  );
};

export { Product };
