import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";
const Icon = ({
  src,
  size,
  fill = "currentColor",
  className,
  style,
  isUrl = false,
  alt,
  ...rest
}) => {
  const [svgContent, setSvgContent] = useState(null);
  const svgRef = useRef(null);
  // Handle URL-based SVGs
  useEffect(() => {
    if (isUrl && typeof src === "string") {
      fetch(src)
        .then((response) => {
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
    return _jsx("svg", {
      ref: svgRef,
      className: className,
      style: svgStyle,
      dangerouslySetInnerHTML: { __html: svgContent },
      role: alt ? "img" : undefined,
      "aria-label": alt,
      ...rest,
    });
  }
  if (typeof src === "function") {
    // SVGR-generated component
    const SvgComponent = src;
    return _jsx(SvgComponent, {
      className: className,
      style: svgStyle,
      role: alt ? "img" : undefined,
      "aria-label": alt,
      ...rest,
    });
  }
  return null;
};
export default Icon;
