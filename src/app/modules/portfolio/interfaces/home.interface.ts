import { ASSETS_TYPE } from "@app/enums";

export interface IFloatItem {
  name: string;
  type: ASSETS_TYPE;
  translateX: string;
  translateY: string;
  timeDuration?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
}

export interface ISummaryExp {
  iconName: string;
  iconType: ASSETS_TYPE;
  count: number;
  label: string;
}

export interface ISummaryAboutMe {
  name: string;
  type: ASSETS_TYPE;
}
