import { createContext, ReactNode, useEffect, useState } from "react";
import { MenuDTO } from "interfaces/menu.interface";
import { TopPageDTO } from "interfaces/page.interface";
import { PropsWithChildren } from "react";

export interface IAppContext {
  menu: MenuDTO.Item[];
  firstCategory: TopPageDTO.TopLevelCategory;
  setMenu?: (newMenu: MenuDTO.Item[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopPageDTO.TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}:  PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuDTO.Item[]>(menu);

  useEffect(() => {
    setMenu(menu);
  }, [menu]);

  const setMenu = (newMenu: MenuDTO.Item[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
