export function generateShortLink(): string {
  // 8 characters alphanumeric upper case and lower case combination
  const shortLink = Math.random().toString(36).substring(2, 10);
  const shortLinkWithSomeUpperCase = shortLink
    .split('')
    .map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char))
    .join('');
  return shortLinkWithSomeUpperCase;
}
