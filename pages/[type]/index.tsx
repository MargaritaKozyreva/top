import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { withLayout } from "../../layout/Layout";
import { MenuDTO } from "interfaces/menu.interface";
import axios from "axios";
import { firstLevelMenu } from "helpers/helpers";
import { ParsedUrlQuery } from "querystring";

interface TypeProps extends Record<string, unknown> {
  menu: MenuDTO.Item[];
  firstCategory: number;
}

function Type(props: TypeProps): JSX.Element {
  const { menu, firstCategory } = props;

  return <div>{firstCategory}</div>;
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((menu) => "/" + menu.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async (
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

  const { data: menu } = await axios.post<MenuDTO.Item[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory: firstCategoryItem.id,
    }
  );
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};
