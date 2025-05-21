export const extractCity = (text: string) => {
  const match = text.match(/in\s+([a-zA-Z\s]+)/i);
  return match ? match[1].trim() : null;
};
