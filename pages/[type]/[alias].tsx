import React, { useState } from "react";
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { withLayout } from "../../layout/Layout";
import { MenuDTO } from "interfaces/menu.interface";
import axios from "axios";
import { TopPageDTO } from "interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductDTO } from "interfaces/product.interface";
import { firstLevelMenu } from "helpers/helpers";
import { TopPageComponent } from "page-components";

interface TopPageProps extends Record<string, unknown> {
  menu: MenuDTO.Item[];
  firstCategory: TopPageDTO.TopLevelCategory;
  page: TopPageDTO.Model;
  products: ProductDTO.Model[];
}

function TopPage(props: TopPageProps): JSX.Element {
  const { firstCategory, page, products } = props;
  return (
    <TopPageComponent
      firstCategory={firstCategory}
      page={page}
      products={products}
    />
  );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const firstLevelMenuItem of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuDTO.Item[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
      {
        firstCategory: firstLevelMenuItem.id,
      }
    );

    paths = paths.concat(
      menu.flatMap((m) =>
        m.pages.map((p) => `/${firstLevelMenuItem.route}/` + p.alias)
      )
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async (
  props: GetStaticPropsContext<ParsedUrlQuery>
) => {
  const { params } = props;

  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find(
    (firstLevelMenuItem) => firstLevelMenuItem.route === params.type
  );

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuDTO.Item[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
      {
        firstCategory: firstCategoryItem.id,
      }
    );

    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<TopPageDTO.Model>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias
    );

    const { data: products } = await axios.post<ProductDTO.Model[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
      {
        category: page.category,
        limit: 10,
      }
    );

    return {
      props: {
        firstCategory: firstCategoryItem.id,
        page,
        products,
        menu,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
