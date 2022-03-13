// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ProductDTO {
    export interface ProductCharacteristic {
        value: string;
        name: string;
    }

    export interface ReviewModel {
        _id: string;
        name: string;
        title: string;
        description: string;
        rating: number;
        createdAt: string;
    }

    export interface Model {
        _id: string;
        categories: string[];
        tags: string[];
        title: string;
        link: string;
        price: number;
        credit: number;
        oldPrice: number;
        description: string;
        characteristics: ProductCharacteristic[];
        createdAt: string;
        updatedAt: string;
        __v: number;
        image: string;
        initialRating: number;
        reviews: ReviewModel[];
        reviewCount: number;
        reviewAvg?: number | null;
        advantages?: string;
        disadvantages?: string;
    }
}