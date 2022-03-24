import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import styles from "./Search.module.scss";

import cn from "classnames";
import { Input } from "components/Input/Input";
import { Button } from "components/Button";

import SearchIcon from "@ui/Icons/search.svg";
import { useRouter } from "next/router";

export interface SearchProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Search: React.FC<SearchProps> = (props) => {
  const { className, ...attr } = props;
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...attr}>
      <Input
        placeholder="Поиск"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        design="primary"
        className={styles.searchButton}
        onClick={goToSearch}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
