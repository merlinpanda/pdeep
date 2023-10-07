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
