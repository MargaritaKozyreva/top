// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace TopPageDTO {

    export enum TopLevelCategory {
        Courses,
        Services,
        Books,
        Products
    }

    export interface Advantage {
        title: string;
        description: string;
        _id: string;
    }

    export interface HhData {
        count: number;
        juniorSalary: number;
        middleSalary: number;
        seniorSalary: number;
        updatedAt: string;
        _id: string;
    }

    export interface Blog {
        h1: string;
        metaTitle: string;
        metaDescription: string;
        views: number;
        _id: string;
    }

    export interface Model {
        _id: string;
        tags: string[];
        secondCategory: string;
        alias: string;
        title: string;
        category: string;
        seoText: string;
        tagsTitle: string;
        metaTitle: string;
        metaDescription: string;
        firstCategory: TopLevelCategory;
        advantages: Advantage[];
        createdAt: string;
        updatedAt: string;
        hh: HhData;
        qas: any[];
        addresses: unknown[];
        categoryOn: string;
        blog: Blog;
    }

}

