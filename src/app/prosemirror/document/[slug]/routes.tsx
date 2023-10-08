import { IPageRoute } from "@/utils/types";
import Introduction from "./introduction";

const routes: IPageRoute[] = [
  {
    title: "简介",
    slug: "introduction",
    group: "Introduction",
    page: <Introduction />,
  },
];

export default routes;
