import axios from "axios";
import { MenuDTO } from "interfaces/menu.interface";
import { withLayout } from "layout/Layout";
import { GetStaticProps } from "next";
import React from "react";

const Search = (props: any): JSX.Element => {
  console.log(props);
  return <div>search</div>;
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<any> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuDTO.Item[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
