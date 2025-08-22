import { CSSProperties, ComponentType, SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  src: string | ComponentType<SVGProps<SVGSVGElement>>;
  size?: number;
  fill?: string;
  className?: string;
  style?: CSSProperties;
  isUrl?: boolean;
  alt?: string;
}
