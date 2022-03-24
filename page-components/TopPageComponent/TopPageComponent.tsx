import { Card, HhData, Product, Tag } from "components";
import { BenefitSections } from "components/Benefits/Benefits";
import Sort, { SortEnum } from "components/Sort/Sort";
import { H1, H2, P, Span } from "components/Text";
import { TopPageDTO } from "interfaces/page.interface";
import { ProductDTO } from "interfaces/product.interface";
import React, { useReducer } from "react";
import { sortReducer, SortReducerState } from "./sort.reducer";

import styles from "./TopPageComponent.module.scss";

interface TopPageComponent extends Record<string, unknown> {
  firstCategory: TopPageDTO.TopLevelCategory;
  page: TopPageDTO.Model;
  products: ProductDTO.Model[];
}

const TopPageComponent: React.FC<TopPageComponent> = (props) => {
  const { firstCategory, page, products } = props;

  const initialState: SortReducerState = { products, sort: SortEnum.Raiting };
  const [sortState, dispatchSort] = useReducer(sortReducer, initialState);

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <H1>{page.title}</H1>
        {sortState.products && (
          <Tag design="grey">{sortState.products.length}</Tag>
        )}
        <Sort sort={sortState.sort} setSort={setSort} />
      </div>

      <div>
        {sortState.products &&
          sortState.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
      <div className={styles.hhTitle}>
        <H2>Вакансии - {page.category}</H2>
        {page && <Tag design="red">hh</Tag>}
      </div>
      {firstCategory === TopPageDTO.TopLevelCategory.Courses && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <div className={styles.benefitTitle}>
            <H2>Преимущества</H2>
          </div>
          <BenefitSections advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <H2>Получаемые навыки</H2>
      <div className={styles.skillTags}>
        {page.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
};

export { TopPageComponent };
