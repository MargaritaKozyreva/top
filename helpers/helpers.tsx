import { MenuDTO } from "interfaces/menu.interface";

import CourseIcon from "@ui/Icons/course.svg";
import ServiceIcon from "@ui/Icons/service.svg";
import BookIcon from "@ui/Icons/book.svg";
import ProductIcon from "@ui/Icons/product.svg";
import { TopPageDTO } from "interfaces/page.interface";

export const firstLevelMenu: MenuDTO.FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CourseIcon />,
    id: TopPageDTO.TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServiceIcon />,
    id: TopPageDTO.TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BookIcon />,
    id: TopPageDTO.TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Товары",
    icon: <ProductIcon />,
    id: TopPageDTO.TopLevelCategory.Products,
  },
];

export const priceRu = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").concat(' ₽');
};
