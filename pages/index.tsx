import { Rating } from "components/Raiting";
import { Tag } from "components/Tag";
import { Layout, withLayout } from "../layout/Layout";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";
import { H1, H2, P } from "../components/Text";
import styles from "../styles/Home.module.css";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuDTO } from "interfaces/menu.interface";

interface HomeProps extends Record<string, unknown> {
  menu: MenuDTO.Item[];
  firstCategory: number;
}

function Home(props: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [text, setText] = useState<string>("hi");

  const onHandleClick = () => {
    setCounter((state) => state + 1);
  };

  const { menu, firstCategory } = props;

  return (
    <>

      <Rating isEditable={true} currentValue={0} items={7} />
      <Rating isEditable={true} currentValue={4} items={10} />
      <H1>{counter}</H1>
      <H1>{text}</H1>
      <P size="s">
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>

    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
