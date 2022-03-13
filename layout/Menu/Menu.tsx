import React, { useContext } from "react";

import { MenuDTO } from "interfaces/menu.interface";
import { Span } from "components/Text";
import { AppContext } from "context/app.context";

import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "helpers/helpers";

import cn from "classnames";
import styles from "./Menu.module.scss";

const Menu: React.FC = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((menuItem) => {
          if (menuItem._id.secondCategory === secondCategory) {
            menuItem.isOpened = !menuItem.isOpened;
          }
          return menuItem;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((firstLevelMenuItem) => (
          <div key={firstLevelMenuItem.route}>
            <Link href={`/${firstLevelMenuItem.route}`}>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]:
                      firstLevelMenuItem.id === firstCategory,
                  })}
                >
                  {firstLevelMenuItem.icon}
                  <Span>{firstLevelMenuItem.name}</Span>
                </div>
              </a>
            </Link>

            {firstLevelMenuItem.id === firstCategory &&
              buildSecondLevel(firstLevelMenuItem)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (_menu: MenuDTO.FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((menuItem) => {
          if (
            menuItem.pages
              .map((page) => page.alias)
              .includes(router.asPath.split("/")[2])
          ) {
            menuItem.isOpened = true;
          }

          return (
            <div
              key={menuItem._id.secondCategory}
              onClick={() => openSecondLevel(menuItem._id.secondCategory)}
            >
              <div className={styles.secondLevel}>
                {menuItem._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: menuItem.isOpened,
                })}
              >
                {buildThirdLevel(menuItem.pages, _menu.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: MenuDTO.PageItem[], route: string) => {
    return pages.map((page) => {
      const isThirdLevelActive = `/${route}/${page.alias}` === router.asPath;

      return (
        <Link href={`/${route}/${page.alias}`} key={page.alias}>
          <a
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: isThirdLevelActive,
            })}
          >
            {page.category}
          </a>
        </Link>
      );
    });
  };

  return (
    <div className={styles.menu}>
      <ul>{buildFirstLevel()}</ul>
    </div>
  );
};

export { Menu };
