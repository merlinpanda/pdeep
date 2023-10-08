"use client";

import { MDXProvider } from "@mdx-js/react";
import Intro from "@/contents/prosemirror/document/introduction.mdx";

export default function Introduction() {
  return (
    <MDXProvider>
      <Intro />
    </MDXProvider>
  );
}
