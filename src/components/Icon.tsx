import React, { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";
import { IconProps } from "../types";

const Icon: React.FC<IconProps> = ({
  src,
  size = 24,
  fill = "currentColor",
  className,
  style,
  isUrl = false,
  alt,
  ...rest
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Handle URL-based SVGs
  useEffect(() => {
    if (isUrl && typeof src === "string") {
      const fetchUrl = `${src}?t=${Date.now()}`; // Cache-busting query
      fetch(fetchUrl, { cache: "no-store" })
        .then((response) => {
          if (!response.ok)
            throw new Error(`Fetch failed: ${response.statusText}`);
          return response.text();
        })
        .then((data) => {
          let modifiedData = DOMPurify.sanitize(data);
          // Apply fill to SVG
          if (fill && fill !== "currentColor") {
            if (modifiedData.includes("fill=")) {
              modifiedData = modifiedData.replace(
                /<svg\s+([^>]*)fill="[^"]*"([^>]*)>/i,
                `<svg $1fill="${fill}"$2>`
              );
            } else {
              modifiedData = modifiedData.replace(
                /<svg\s+([^>]*)>/i,
                `<svg $1 fill="${fill}">`
              );
            }
          }
          // Apply size to SVG
          modifiedData = modifiedData.replace(
            /<svg\s+([^>]*)>/i,
            `<svg $1 width="${size}" height="${size}">`
          );
          setSvgContent(modifiedData);
        })
        .catch((error) => {
          console.error("Error fetching SVG:", error);
          setSvgContent(null);
        });
    }
  }, [src, isUrl, fill, size]);

  // Styles for SVG container
  const svgStyle = {
    ...style,
    width: `${size}px`,
    height: `${size}px`,
    fill,
  };

  if (isUrl && svgContent) {
    return (
      <div
        style={{
          display: "inline-block",
          width: `${size}px`,
          height: `${size}px`,
        }}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        role={alt ? "img" : undefined}
        aria-label={alt}
        className={className}
        {...rest}
      />
    );
  }

  if (typeof src !== "string") {
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

  return null;
};

export default Icon;
