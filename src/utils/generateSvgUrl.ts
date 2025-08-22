// export function generateSvgUrl(
//   baseUrl: string,
//   params: { size?: number; fill?: string } = {}
// ): string {
//   const url = new URL(baseUrl);
//   if (params.size) url.searchParams.set("size", params.size.toString());
//   if (params.fill)
//     url.searchParams.set("fill", encodeURIComponent(params.fill));
//   return url.toString();
// }

// export function generateSvgUrl(
//   baseUrl: string,
//   params: { size?: number; fill?: string } = {}
// ): string {
//   // Ensure baseUrl starts with a slash and prepend localhost only if needed
//   const normalizedBaseUrl = baseUrl.startsWith("/") ? baseUrl : `/${baseUrl}`;
//   const origin =
//     typeof window !== "undefined"
//       ? window.location.origin
//       : "http://localhost:3000";
//   const url = new URL(normalizedBaseUrl, origin);
//   if (params.size) url.searchParams.set("size", params.size.toString());
//   if (params.fill)
//     url.searchParams.set("fill", encodeURIComponent(params.fill || "")); // Fix typo: params.full -> params.fill
//   return url.toString();
// }
export function generateSvgUrl(
  baseUrl: string,
  params: { size?: number; fill?: string } = {}
): string {
  // Normalize baseUrl to ensure it starts with a slash
  const normalizedBaseUrl = baseUrl.startsWith("/") ? baseUrl : `/${baseUrl}`;
  // Use a fallback origin for non-browser environments
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000";
  let url: URL;
  try {
    url = new URL(normalizedBaseUrl, origin);
  } catch (error) {
    console.error("Invalid URL in generateSvgUrl:", { baseUrl, origin, error });
    throw new Error(`Failed to construct URL from ${baseUrl}`);
  }
  if (params.size) url.searchParams.set("size", params.size.toString());
  if (params.fill)
    url.searchParams.set("fill", encodeURIComponent(params.fill));
  return url.toString();
}
