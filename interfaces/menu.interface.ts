import { TopPageDTO } from "./page.interface";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace MenuDTO {

    export interface PageItem {
        alias: string;
        title: string;
        _id: string;
        category: string;
    }

    export interface Item {
        _id: {
            secondCategory: string;
        };
        isOpened?: boolean;
        pages: PageItem[];
    }

    export interface FirstLevelMenuItem {
        route: string;
        name: string;
        icon: JSX.Element;
        id: TopPageDTO.TopLevelCategory;
    }

}

