import React from "react";

export interface IClassName {
  className?: string;
  [key: string]: any;
}

export interface ISelected {
  selected?: boolean;
  [key: string]: any;
}

export interface ISettingStorage {
  setting: any;
  setSetting: (setting: any) => void;
}

export interface IPageRoute {
  title: string;
  slug: string;
  page: React.ReactNode;
  group: string;
}
