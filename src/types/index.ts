import { CSSProperties, FC, SVGProps } from "react";

export interface IconProps {
  src: FC<SVGProps<SVGSVGElement>> | string;
  size?: number;
  fill?: string;
  className?: string;
  style?: CSSProperties;
  isUrl?: boolean;
  alt?: string;
}
