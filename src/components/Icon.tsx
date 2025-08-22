import React, { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";
import { IconProps } from "../types";

const Icon: React.FC<IconProps> = ({
  src,
  size,
  fill = "currentColor",
  className,
  style,
  isUrl = false,
  alt,
  ...rest
}) => {
  console.log("Icon rendering with src:", src);
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Handle URL-based SVGs
  useEffect(() => {
    if (isUrl && typeof src === "string") {
      console.log("Fetching SVG from:", src);
      fetch(src)
        .then((response) => {
          console.log("Fetch response:", response.ok, response.status);
          if (!response.ok)
            throw new Error(`Fetch failed: ${response.statusText}`);
          return response.text();
        })
        .then((data) => {
          // Replace fill attribute in SVG content
          let modifiedData = DOMPurify.sanitize(data);
          if (fill && fill !== "currentColor") {
            modifiedData = modifiedData.replace(
              /fill="[^"]*"/g,
              `fill="${fill}"`
            );
          }
          console.log("Fetched SVG content:", modifiedData);
          setSvgContent(modifiedData);
        })
        .catch((error) => {
          console.error("Error fetching SVG:", error);
          setSvgContent(null);
        });
    }
  }, [src, isUrl, fill]);

  // Apply size to SVG
  const svgStyle = {
    ...style,
    width: size ? `${size}px` : undefined,
    height: size ? `${size}px` : undefined,
    fill,
  };

  if (isUrl && svgContent) {
    return (
      <svg
        ref={svgRef}
        className={className}
        style={svgStyle}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        role={alt ? "img" : undefined}
        aria-label={alt}
        {...rest}
      />
    );
  }

  if (typeof src === "function") {
    // SVGR-generated component
    const SvgComponent = src;
    return (
      <SvgComponent
        className={className}
        style={svgStyle}
        role={alt ? "img" : undefined}
        aria-label={alt}
        {...rest}
      />
    );
  }
  console.log("Icon is rendering");

  return null;
};

export default Icon;
