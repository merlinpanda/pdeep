export interface IRoute {
  title: string;
  slug: string;
  href: string;
  children?: IRoute[];
}

export interface IRouteMap {
  [key: string]: IRoute[];
}

const routes: IRouteMap = {
  document: [
    {
      title: "Introduction",
      slug: "introduction",
      href: "/prosemirror/document/introduction",
      children: [
        {
          title: "My first editor",
          slug: "my-first-editor",
          href: "/prosemirror/document/my-first-editor",
        },
        {
          title: "Transactions",
          slug: "transactions",
          href: "/prosemirror/document/transactions",
        },
        {
          title: "Plugins",
          slug: "plugins",
          href: "/prosemirror/document/plugins",
        },
        {
          title: "Commands",
          slug: "commands",
          href: "/prosemirror/document/commands",
        },
        {
          title: "Content",
          slug: "content",
          href: "/prosemirror/document/content",
        },
      ],
    },
  ],
};

export default routes;
