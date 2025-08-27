export function generateSvgUrl(baseUrl: string): string {
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
  return url.toString();
}
